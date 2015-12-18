var app = require("./app.js");

// Load the http module to create an http server.
var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "application/json"});
  
  switch (req.method) {
  	 case "POST":

  	 	var body = "";
  	 	
        req.on('data', function (data) {
	        body += data;
	        console.log("Partial body: " + body);
	    });

	    req.on('end', function () {
	        try {
	        	req.JSONBody = JSON.parse(body);	
	        } catch (e) {
				res.end();
	        }

	        app.post(req, res, function() {
  				res.end();	
  			});
	    });

        

        break;
    case "get":
    default:
        app.get(req, res, function() {
			res.end();	
		});
  }
  

 

});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(process.env.PORT || 3000, function() {
	console.log("LambyJS Server running!")
});