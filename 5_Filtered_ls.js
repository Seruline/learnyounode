let fs = require('fs');
let path = require('path');

fs.readdir(process.argv[2], 'utf-8', (err, data) => {
    if (err){
        console.error(err);
    }else{
        data.filter((item) => {
            if (path.extname(item) === '.'+process.argv[3]){
                console.log(item);
            }
        })
    }
})