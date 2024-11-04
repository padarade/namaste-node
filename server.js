const http = require("http");

// it gives instance of a server
const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  res.end("hello world");
});

server.listen(8080);
