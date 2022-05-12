 const fs = require('fs');
 let res = fs.writeFileSync('./1.txt', '白日依山尽', 'utf8')
 console.log(res);