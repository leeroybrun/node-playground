var spawn = require('child_process').spawn;

require('http').createServer(function(req, res) {
    var child = spawn('tail', ['-f', '/var/log/system.log']);
    child.stdout.pipe(res);
    
    // Au moment o`ù la connecion se termine, on quitte le processus
    res.on('end', function() {
        child.kill();
    });
    
    // On termine la requ^ête au bout de 10 secondes
    setTimeout(function() {
        res.end();
    }, 10000);
}).listen(process.env.PORT);