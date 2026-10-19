const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);

  if (urlPath === "/") {
    urlPath = "/index.html";
  }

  const filePath = path.resolve(PUBLIC_DIR, "." + urlPath);

  // Mencegah akses ke file di luar folder website
  if (filePath !== PUBLIC_DIR && !filePath.startsWith(PUBLIC_DIR + path.sep)) {
    res.writeHead(403);
    res.end("403 Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      res.end("404 Not Found: " + urlPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();

    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
    });

    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Website berjalan di http://localhost:${PORT}`);
});
