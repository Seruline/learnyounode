
let fs = require('fs');

let result = fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err){
        console.error(err);
    }else{
        data = data.split('\n').length-1;
        console.log(data)
    }
})