var util = require("util");

//console.log(process.memoryUsage());

//console.warn("Warning !");

//console.trace();

//util.log('Hello');

console.log(util.inspect({hello : 'World'}, true, 2, true));