const express = require('express');
const app = express();
const port  = 7000;
const path = require('path');
const morgan = require('morgan');

let myFun = (req, res, next) => {
    if((req.query.age) >=18){
        next();
     }
     else{
        res.send('you are not 18 years old');
     }
}

app.use(express.json());
app.use(morgan('dev'));

app.get ('/',myFun,(req, res) => {
    res.send('welcome to the express js');
});

app.listen(port,() => {
    console.log('server start at http://localhost:7000');
});