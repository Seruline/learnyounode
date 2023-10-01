const net = require('net');

addZero = (value) => {
    return (value >= 10 ? value : '0'+value);
}
const server = net.createServer(socket =>{
    let data = new Date();
    let year = String(data.getFullYear());
    let month = String(data.getMonth()+1);
    let date = String(data.getDate());
    let hours = String(data.getHours());
    let minutes = String(data.getMinutes());
    socket.end(year + '-' + addZero(month) + '-' + addZero(date) + ' ' + addZero(hours) + ':' + addZero(minutes)+"\n");

}).listen(process.argv[2])