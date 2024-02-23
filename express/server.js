const express = require('express');
const server = express();     // srver create


// server.get('/', (req, res) => {
//     res.end('welcome ');
// });

// server.get('/server5', (req, res) => {
//     res.end('welcome to local ');
// });

server.get('/server4', (req, res) => {
    res.end('welcome to local server........5');
});

server.listen(9687,() => {
    console.log('server is running on port http://localhost:9687');
});