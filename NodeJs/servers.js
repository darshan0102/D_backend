// http Module

 const http  = require('http');

 const server = http.createServer((req, res) => {
    res.end('welcome to local server........1');
 });
  

   server.listen(9686, () => {
    console.log('server is running on port 9686');
 });