
const http  = require('http');

const server5 = http.createServer((req, res) => {
    res.end('welcome to local server........5');
 });
  

   server5.listen(9690, () => {
    console.log('server is running on port 9690');
 });
 