const express = require('express');
const server2 = express();    // server create
const path = require('path');
 
// server2.get('/', (req, res) => {
//     res.end('welcome to node js.');
// });

// server2.post('/', (req, res) => {
//         res.end('post method');
// });

// server2.put('/',(req,res) => {
//     res.status(201).json({message: 'put method call'})
// });

// server2.patch("/", (req, res) => {
//     res.sendFile(path.join(__dirname,'./abc.txt'));
// });

// server2.delete('/',(req, res)=> {
//       res.sendStatus(201);
// });

server2.listen(1111,() => {
    console.log('server start at http://localhost:1111');
});

