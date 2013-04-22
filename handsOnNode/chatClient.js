var socket = require('net').createConnection(process.env.PORT, process.env.IP);

socket.on('connect', function() {
    socket.write('I send you some data !');
});

socket.on('data', function(data) {
    console.log(data);
});