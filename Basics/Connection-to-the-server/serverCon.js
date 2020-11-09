var http = require('http');

var server = http.createServer();
var PORT = process.env.PORT || 3030;

server.on('request', function (req, res){
    res.end("Success, I'm listening from port: " + PORT);
});
server.listen(PORT, function (){
    console.log("Listening on PORT: " + PORT);
});