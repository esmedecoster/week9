port = process.argv[2];
var port = (process.argv[2] ? Number(process.argv[2]) : 1025);
var net = require('net');
var server = net.createServer(respond);

function respond(socket) {
    d = new Date();
    var n = d.getMilliseconds();
    socket.end(n.toString());
    
    console.log(n)
}
console.log("Listening on port ", port);
server.listen(port);

