import http.server
import socketserver

PORT = 8000

class BrotliHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add proper headers for Brotli-compressed Unity build files
        if self.path.endswith(".js.br"):
            self.send_header("Content-Type", "application/javascript")
            self.send_header("Content-Encoding", "br")
        elif self.path.endswith(".wasm.br"):
            self.send_header("Content-Type", "application/wasm")
            self.send_header("Content-Encoding", "br")
        elif self.path.endswith(".data.br"):
            self.send_header("Content-Type", "application/octet-stream")
            self.send_header("Content-Encoding", "br")
        super().end_headers()

with socketserver.TCPServer(("", PORT), BrotliHandler) as httpd:
    print(f"Serving on http://localhost:{PORT}")
    httpd.serve_forever()
