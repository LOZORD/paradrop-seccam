// XXX see monitorlog for example code
// Might want to use chokidar as well for directory watching

var http = require('http');

module.exports = http.createServer(function(request, response) {
  console.log('GOT REQUEST!');
  /*
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
  */

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  response.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
  //return next();
});