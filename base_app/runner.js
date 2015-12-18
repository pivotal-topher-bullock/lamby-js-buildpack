var app = require("./app.js");

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  
  app(request, response);

  response.end();

});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT || 3000, function() {
	console.log("LambyJS Server running!")
});