var net = require('net')

net.createServer(function(socket) {
    console.log('Server listening on : '+ process.env.IP +':'+ process.env.PORT);
    
    socket.on('data', function(data) {
        console.log('Received : '+ data);
        socket.write('Received : '+ data);
    });
}).listen(process.env.PORT);

// Client
var client = net.createConnection({host: process.env.IP, port: process.env.PORT},  function() {
    client.write('I send you some data !');

    client.on('data', function(data) {
        console.log(data);
    });
});