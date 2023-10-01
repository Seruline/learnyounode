let fs = require('fs');

let result = fs.readFileSync(process.argv[2]).toString()
result = result.split('\n').length-1;
console.log(result)