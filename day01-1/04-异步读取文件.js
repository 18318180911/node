const fs = require('fs');
fs.readFile('./1.txt', 'utf8', (err, data) => {
    console.log(err);
    console.log(data);
})