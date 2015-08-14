/**
 * New node file
 */

var express = require('express');

var app = express();

app.use(express.static("..\\client"));



var server = app.listen(3000,"0.0.0.0", function() {
	console.log("listening for connection on port : "+server.address().port);
});
