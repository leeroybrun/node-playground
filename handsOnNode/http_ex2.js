require("http").createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    var left = 10;
    
    var interval = setInterval(function() {
        res.write(Date.now() +"\n");
        
        if( --left === 0) {
            clearInterval(interval);
            res.end();
        }
    }, 1000);
}).listen(process.env.PORT);