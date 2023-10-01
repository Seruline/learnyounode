
const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    req.pipe(map( chunk => {
        return chunk.toString().toUpperCase();
      })).pipe(res);
}).listen(process.argv[2])