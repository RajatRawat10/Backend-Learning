const http = require("http");

//Create server suing http
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("hello world4455" );
  } else {
    res.end("page not found");
  }
});

server.listen(3000); 
