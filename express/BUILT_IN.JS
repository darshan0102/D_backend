const express = require('express');
const app = express();
const port  = 7000;
const path = require('path');
const morgan = require('morgan');

// let myFun = (req, res, next) => {
//     if((req.query.age) >=18){
//         next();
//      }
//      else{
//         res.send('you are not 18 years old');
//      }
// }

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/hello',express.static(path.join(__dirname, '../express/abc.txt')));
app.use(morgan('dev'));

// app.get ('/',(req, res) => {
//     res.send('welcome to the express js');
// });

// app.get ('/',(req, res) => {
//         res.sendFIle('welcome to the express js');
//     });

app.post('/',(req, res) => {
    console.log(req.body);
    res.send('Post method')
});

app.listen(port,() => {
    console.log('server start at http://localhost:7000');
});