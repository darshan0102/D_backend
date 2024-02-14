const fs = require('fs');
// Synchronously and Asynchronously method

// Asynchronously method

fs.open('abc.txt',(err, data)=> {
    if(err){
        console.log('Filed to open File');
    }
      else
      console.log('File open sucessfully');
})

// Synchronously method

// fs.openSync('abc.txt');
// console.log('File open sucessfully');