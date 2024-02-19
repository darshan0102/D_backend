
const http  = require('http');

const fs = require('fs');
const data = fs.readFileSync("./dc.txt","utf-8");

const server2 = http.createServer((req, res) =>{
    // res.write('<h1 style"color:pink">welcome to</h1>');
    // res.setHeader('Content-Type', 'text/html');
     res.end(data);
});
  

   server2.listen(9687, () => {
    console.log('server is running on port 9687');
 });

