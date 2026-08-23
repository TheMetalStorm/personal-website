import ftplib
import os
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path


def load_dotenv_file() -> None:
    """Load simple KEY=VALUE entries without requiring a third-party package."""
    env_file = Path('.env')
    if not env_file.is_file():
        return

    for raw_line in env_file.read_text(encoding='utf-8').splitlines():
        line = raw_line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        key, value = line.split('=', 1)
        key = key.strip()
        value = value.strip().strip('"\'')
        if key and key not in os.environ:
            os.environ[key] = value




if len(sys.argv) <= 2: exit("Usage: python ftp_upload.py [folder] [remote_path]")


load_dotenv_file()

server = os.getenv('FTP_SERVER')
if not server:
    exit("Error: FTP_SERVER environment variable not set.")
port = os.getenv('FTP_PORT') or "21"
if not port.isdigit():
    exit("Error: FTP_PORT environment variable must be a number.")
port = int(port)
user = os.getenv('FTP_USER')
if not user:
    exit("Error: FTP_USER environment variable not set.")
password = os.getenv('FTP_PASSWORD')
if not password:
    exit("Error: FTP_PASSWORD environment variable not set.")

print(f"Connecting securely to FTP server {server} on port {port} as user {user}")

folder = sys.argv[1] 
if not os.path.isdir(folder):
    exit(f"Error: The folder '{folder}' does not exist or is not a directory.")
remote_path = sys.argv[2]
def create_ftp_connection():
    """Create a new explicit-TLS FTP connection with the same credentials."""
    new_session = ftplib.FTP_TLS()
    new_session.connect(server, port)
    new_session.login(user, password)
    new_session.prot_p()
    new_session.cwd(remote_path)
    new_session.set_pasv(True)
    return new_session

try:
    session = create_ftp_connection()
except (ftplib.all_errors, OSError) as error:
    exit(f"Error: Could not establish a secure FTP connection: {error}")

def upload_file(file_info):
    """Upload a single file using a dedicated FTP connection"""
    local_path, remote_file_path = file_info
    
    ftp_session = None

    try:
        ftp_session = create_ftp_connection()
        print(f'Uploading {local_path}...')
        
        with open(local_path, 'rb') as file:
            print(f'STOR {remote_file_path}')
            result = ftp_session.storbinary(f'STOR {remote_file_path}', file)
            print(f'Completed {local_path}: {result}')
            return True, local_path, result
            
    except Exception as e:
        print(f'Error uploading {local_path}: {e}')
        return False, local_path, str(e)
    finally:
        if ftp_session is not None:
            try:
                ftp_session.quit()
            except ftplib.all_errors:
                pass  # Ignore cleanup errors

# Phase 1: Collect all directories and files
print("Scanning directory structure...")
all_dirs = set()
all_files = []

for subdir, dirs, files in os.walk(folder):
    # Collect directories
    for dir_name in dirs:
        full_dir_path = os.path.join(subdir, dir_name)
        remote_dir_path = os.path.relpath(full_dir_path, folder).replace('\\', '/')
        all_dirs.add(remote_dir_path)
    
    # Collect files
    for file_name in files:
        local_file_path = os.path.join(subdir, file_name)
        if os.path.isfile(local_file_path):
            remote_file_path = os.path.relpath(local_file_path, folder).replace('\\', '/')
            all_files.append((local_file_path, remote_file_path))

# Phase 2: Create all directories first (sequentially to avoid conflicts)
print(f"Creating {len(all_dirs)} directories...")
directory_failures = []
for remote_dir_path in sorted(all_dirs):  # Sort to ensure parent dirs are created first
    print(f'Creating directory {remote_dir_path}...')
    try:
        session.mkd(remote_dir_path)
        print(f'Created directory {remote_dir_path}')
    except ftplib.error_perm as e:
        if not str(e).startswith('550'):
            print(f'Error creating directory {remote_dir_path}: {e}')
            directory_failures.append((remote_dir_path, str(e)))
        else:
            print(f'Directory {remote_dir_path} already exists')

# Phase 3: Upload all files in parallel
successful_uploads = 0
failed_uploads = 0
if not all_files:
    print("No files to upload.")
else:
    print(f"Uploading {len(all_files)} files in parallel...")
    
    # Configurable max workers (default 5, but can be adjusted based on server limits)
    try:
        configured_workers = int(os.getenv('FTP_MAX_WORKERS', '5'))
    except ValueError:
        exit("Error: FTP_MAX_WORKERS environment variable must be a number.")
    if configured_workers < 1:
        exit("Error: FTP_MAX_WORKERS environment variable must be at least 1.")
    max_workers = min(configured_workers, len(all_files))
    print(f"Using {max_workers} concurrent connections...")
    
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        # Submit all upload tasks
        future_to_file = {executor.submit(upload_file, file_info): file_info for file_info in all_files}
        
        # Process completed uploads
        for future in as_completed(future_to_file):
            try:
                success, local_path, result = future.result()
            except Exception as error:
                success, local_path, result = False, str(future_to_file[future][0]), str(error)
            if success:
                successful_uploads += 1
            else:
                failed_uploads += 1

    print(f"\nUpload Summary:")
    print(f"Successful uploads: {successful_uploads}")
    print(f"Failed uploads: {failed_uploads}")
    print(f"Total files: {len(all_files)}")


if directory_failures or failed_uploads:
    print("Upload failed: one or more directories or files could not be transferred.")
    session.quit()
    sys.exit(1)

session.quit()
