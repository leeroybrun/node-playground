var fs = require('fs');

var routesDir = __dirname +'/routes/';

function route(infos, res) {
    if(infos.path.indexOf('/static/') !== -1) {
        // Serve static files
        require(routesDir + 'statics').handle(infos, res);
    } else {
        // Parse route (controller) and action
        var urlParts = infos.path.split('/'),
            controller = (urlParts[1]) ? urlParts[1] : 'start',
            action = (urlParts[2]) ? urlParts[2] : 'handle';
        
        // Get params
        if(urlParts.length > 3) {
            infos.params = urlParts.slice(3, urlParts.length);
        }
        
        // Check if route file exists
        fs.exists(routesDir + controller +'.js', function(exists) {
            if(exists) {
                var handler = require(routesDir + controller);
                    
                // Call handler if exists
                if(typeof handler[action] === 'function') {
                    handler[action](infos, res);
                } else {
                    notFound(res);
                }
            } else {
                notFound(res);
            }
        });
    }
}

// Return a 404 Not Found error
function notFound(res) {
    res.writeHead(404);
    res.end('Not Found');
}

exports.route = route;