const express =  require('express');
const app = express();
const port = 7070;
const morgan = require('morgan');

// middleware
let myFun = (req, res, next) => {
    if((req.query.age) >=18){
        next();
     }
     else{
        res.send('you are not 18 years old');
     }
}

//  app.use(myFun);   // Application level middleware 
 app.use(express.json());    // built-in
 app.use(morgan('dev'));

//  app.get('/', (req, res, next)=> {
//     res.
//  });