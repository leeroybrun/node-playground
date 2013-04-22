var http = require('http'),
    router = require('./router'),
    url = require('url');

http.createServer(function(req, res) {
    var infos = {};
    infos.path = url.parse(req.url).pathname;
    infos.params = [];
    infos.data = '';

    if(req.method === 'POST' || req.method === 'PUT') {
        req.on('data', function(data) {
            infos.data += data;
        });
    }
    
    req.on('end', function() {
        (infos.data !== '') ? infos.data = JSON.parse(infos.data) : {};
        
        router.route(infos, res);
    });
}).listen(process.env.PORT);