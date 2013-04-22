var http = require("http"),
    fs = require("fs"),
    path = require("path");

var staticFolder = 'handsOnNode/static';

http.createServer(function(req, res) {
    var file = path.normalize(staticFolder + req.url);
    
    fs.exists(file, function(exists) {
        if(exists) {
            fs.stat(file, function(err, stats) {
                if(err) { console.log(err); return }
                
                if(stats.isDirectory()) {
                    res.writeHead(403);
                    res.end('Forbidden');
                } else {
                    var rs = fs.createReadStream(file);
                    res.writeHead(200);
                    rs.pipe(res);
                }
                
            });
        } else {
            res.writeHead(404);
            res.end('File not found');
        }
    });
    /*fs.readFile('handsOnNode/static'+ req.url, function(err, data){
        if(err) { console.log(err); return; }
       
        res.writeHead(200);
        res.end(data);
    });*/
}).listen(process.env.PORT);