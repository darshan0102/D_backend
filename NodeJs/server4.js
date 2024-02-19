
const http  = require('http');

const server4 = http.createServer((req, res) => {
    res.end('welcome to local server........4');
 });
  

   server4.listen(9689, () => {
    console.log('server is running on port 9689');
 });