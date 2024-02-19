
const http  = require('http');

const fs = require('fs');
// const data = fs.readFileSync("./dc.txt","utf-8");

const server2 = http.createServer();

// const server2 = http.createServer((req, res) =>{
   // res.setHeader('Dummy','Dummy value');
   // res.setHeader('Content-type','txt/html');
   //  res.setHeader('content-type','aplication/json');
   // res.write('{"hello":123}'); 
   // res.write('<h1 style="color:red">./dc.txt</h1>');
   // res.end(data);
// });
  
   server2.on('request', (req, res) =>{
      // console.log(req.url);
      // res.setHeader('Content-Type','txt/html');
      // res.end(data);
   })


   server2.listen(9687, () => {
    console.log('server is running on port 9687');
 });

