var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err)
        return console.error('There was an error:', err);

    data.forEach(item => {
        console.log(item);
    });
    
});
