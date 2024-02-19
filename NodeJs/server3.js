const http  = require('http');

const server3 = http.createServer((req, res) => {
    res.end('welcome to local server........3');
 });
  

   server3.listen(9688, () => {
    console.log('server is running on port 9688');
 });