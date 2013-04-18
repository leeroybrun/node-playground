var request = require("request");

request.({uri: "http://www.t411.me"}, function(error, response, body) {
    console.log(body);
});