var needle = require("needle");
var cheerio = require("cheerio");

needle.get('http://www.t411.me', {headers: {user_agent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31'}}, function(error, response, body) {
    var $ = cheerio.load(body);
    
    console.log($('title').html());
});