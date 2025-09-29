import os
import subprocess
import sys

from openai import project

if __name__ == "__main__":
    if len(sys.argv) <= 3: exit("Usage: python ftp_upload.py [project] [folder] [remote_path]")

    project = sys.argv[1] 
    if not os.path.isdir(project):
        exit(f"Error: The project folder '{project}' does not exist or is not a directory.")

    folder = sys.argv[2] 
    remote_path = sys.argv[3]
    root = os.getcwd()
    os.chdir(project)
    print(f"Building project in {project}...")
    pipe = subprocess.Popen("npm run build", shell=True)
    pipe.wait()
    if pipe.returncode != 0:
        exit("Error: Build process failed.")
    print("Build completed.")

    os.chdir(root)
    ftp_script_path = os.path.join(root, "scripts", "ftp_upload.py")
    print(f"Running FTP upload script: {ftp_script_path}")
    print(f"Arguments: folder='{folder}', remote_path='{remote_path}'")
    
    # Check if script exists
    if not os.path.exists(ftp_script_path):
        exit(f"Error: FTP upload script not found at {ftp_script_path}")
    
    # Run with full output capture
    try:
        result = subprocess.run([sys.executable, ftp_script_path, folder, remote_path], 
                              cwd=root, 
                              stdout=subprocess.PIPE, 
                              stderr=subprocess.STDOUT, 
                              text=True,
                              check=False)
        
        # Print all output
        if result.stdout:
            print("FTP Upload Output:")
            print(result.stdout)
        
        if result.returncode != 0:
            print(f"FTP upload failed with return code: {result.returncode}")
            exit("Error: FTP upload process failed.")
        else:
            print("FTP upload completed successfully.")
            
    except Exception as e:
        print(f"Error running FTP script: {e}")
        exit("Error: Failed to execute FTP upload script.")

