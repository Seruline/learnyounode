
const url = require('url');
const http = require('http');

const server = http.createServer((req, res) => {
    
    let parse = url.parse(req.url, true);
    let date = new Date(parse.query.iso);
    let result;

    if(parse.pathname === '/api/parsetime'){
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    } else if (parse.pathname === '/api/unixtime'){
        result = {
            unixtime: date.getTime()
        }
    }

    res.writeHead(200, {'Content-Type': 'application/json'})  
    res.end(JSON.stringify(result));

}).listen(process.argv[2])