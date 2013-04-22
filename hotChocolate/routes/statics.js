var path = require('path'),
    fs = require('fs');

exports.handle = function(infos, res) {
    var file = path.normalize(__dirname +'/..' + infos.path);
        
    // File exists ?
    fs.exists(file, function(exists) {
        if(exists) {
            // Is it a file ?
            fs.stat(file, function(stat_err, stats) {
                if(stats.isFile()) {
                    // Send data back
                    res.writeHead(200);
                    fs.createReadStream(file).pipe(res);
                } else {
                    // It's not a file (maybe directory or something else)
                    res.writeHead(403);
                    res.end('Forbidden');
                }
            });
        } else {
            // File not found
            res.writeHead(404);
            res.end('Not Found');
        }
    })
}