
let fs = require('fs');
let p = require('path');

module.exports = (path, ext, callback) => {

    fs.readdir(path, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        }

        data = data.filter((item) => {
            return (p.extname(item) === '.' + ext)
        });

        return callback(null, data);

    })


}
