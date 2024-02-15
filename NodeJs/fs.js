const fs = require('fs');

const { add, product} = require("./basic.js");

// const {product} = require('./basic.js');
console.log(add(5,3));
// console.log(product(5,3));
// Synchronously and Asynchronously method

// Asynchronously method

// fs.open('abc.txt',(err, data)=> {
//     if(err){
//         console.log('Filed to open File');
//     }
//       else
//       console.log('File open sucessfully');
// })

// Synchronously method

fs.openSync('abc.txt');
console.log('File open sucessfully');


// READ method