var http = require("http");

var options = {
  hostname: 'httpbin.org',
  port: 80,
  path: '/ip',
  method: 'GET',
  headers: {'Origin': 'httpbin.org'},
  agent: false
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.end();