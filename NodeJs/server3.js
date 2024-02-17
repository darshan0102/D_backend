
const http  = require('http');


const server = http.createServer((req, res) => {
    res.end('welcome to local server........3');
 });
  

   server.listen(9688, () => {
    console.log('server is running on port 9688');
 });