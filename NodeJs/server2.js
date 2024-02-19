
const http  = require('http');

const server2 = http.createServer((req, res) => {
    res.end('welcome to local server........2');
 });
  

   server2.listen(9687, () => {
    console.log('server is running on port 9687');
 });