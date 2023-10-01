const http = require('http');
const bl = require('bl');
let urlArary = process.argv.slice(2);
const results = []
let count = 0

printResult = () =>{
    for (let i=0; i < results.length; i++){
        console.log(results[i]);
    }
}

httpGet = (index) => { 
    http.get(process.argv[index+2], response =>{
        response.pipe(bl((err, data)=>{
            if (err){
                console.error(err);
            }

            results[index] = data.toString();
            count++;

            if (count === 3){
                printResult();
            }
        }))
    })
}

for (let i=0; i < urlArary.length; i++){
    httpGet(i);
}