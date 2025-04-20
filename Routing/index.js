
const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      if (err) {
        res.write("Error loading page");
      } else {
        res.write(data);
      }
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "./demo/index.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./demo/about.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "./demo/contact.html");
  } else {
    handleReadFile(200, "./demo/error.html");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`);
});
