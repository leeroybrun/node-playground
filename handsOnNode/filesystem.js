var fs = require("fs");

fs.stat('README.md', function(err, stats) {
    if(err) { console.log(err.message); return; }
    
    if(stats.isFile()) { console.log("It's a file !"); }
    if(stats.isDirectory() === false) { console.log("It's not a directory !"); }
    
    //console.log(stats);
});

/*fs.open('tests/helloworld.txt', 'r+', function(err, fd) {
   
});*/

fs.readFile('tests/helloworld.txt', 'utf-8', function(err, data){
    if(err) { console.log(err); return; }
    
    console.log('File data : '+ data);
});