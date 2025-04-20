const http = require('http');
const port = 3000;
const hostname = "127.0.0.1";

// http.createServer((req,res) => {
//     res.end("Hello World. This is my first server.");
// }).listen(3000);

// const myServer = http.createServer((req,res) => {
//     res.end("<h1>Hello World. This is my first server.</h1>");
// })

const myServer = http.createServer((req, res) => {
    // res.writeHead(202, { 'Content-Type': 'text/plain' });
    res.writeHead(202, { 'Content-Type': 'text/html' });
    res.write("<h1>Hello World. This is my first server.</h1>");
    res.end();
  })

myServer.listen(port, hostname, () => {
    console.log(`Server is running successfully at http://${hostname}:${port}`);
});