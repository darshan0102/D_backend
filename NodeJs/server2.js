
const http  = require('http');

const server = http.createServer((req, res) => {
    res.end('welcome to local server........2');
 });
  

   server.listen(9687, () => {
    console.log('server is running on port 9687');
 });
