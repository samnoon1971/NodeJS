var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.write('Hello world');
    res.end();
})
server.listen(5000);
console.log("Success");