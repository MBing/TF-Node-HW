var http = require('http');
var server = http.createServer(function (req, res) {
	// some code
	// res.write('Hello World');
	res.end('Hello World');
});
server.listen(9000, function () {
	console.log('listening on port 9000');
});