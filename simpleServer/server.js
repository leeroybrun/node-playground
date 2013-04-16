var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;

		console.log("Request received for "+ pathname +".");

		route(handle, pathname, response);
	}

	http.createServer(onRequest).listen(process.env.PORT);

	console.log("Server has started.");
}

exports.start = start;
