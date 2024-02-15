const fs = require("fs")

const { add, product} = require("./basic.js");

// const {product} = require('./basic.js');
// console.log(add(5,3));
// console.log(product(5,3));
// Synchronously and Asynchronously method

// Asynchronously method

// fs.open('dc.txt',(err, data)=> {
//     if(err){
//         console.log('Filed to open File');
//     }
//       else
//       console.log('File open sucessfully');
// })

// Synchronously method

// fs.openSync('dc.txt');
// console.log('File open sucessfully');




// -------------->>>>>>>>>>>>>>  READ method  <<<<<<<<<<<<<<<<---------------------

// let t1 = performance.now();
// console.log('product is : ',product(5,3));
// fs.readFile('dc.txt','utf-8',(err, data)=>{
//     if(err)
//       console.log('Failed to read File');
//      else
//          console.log(data);
// });

// let data = fs.readFileSync('dc.txt','utf-8');
// console.log(data);
// console.log('Addition is:', add(15,32));
// let t2 = performance.now();
// console.log('Time Diffrence is:',t2-t1);



// -------------->>>>>>>>>>>>>>  WRITE method  <<<<<<<<<<<<<<<<---------------------

// let txt = `#include <stdio.h>
// int main()
// {
//     printf("welcome game of throun");
// }`;

// fs.writeFileSync("first.c", txt, (err, data)=>{
//     if (err)
//      console.log("Failed to write File");
//     else
//       console.log("File Write Successful");
// });

// fs.writeFileSync("hello.c",txt);
// console.log("File Written sucessfully");


// -------------->>>>>>>>>>>>>>  APPEND method  <<<<<<<<<<<<<<<<---------------------

// let txt = `// good morning`;
// fs.appendFile("basic.c",txt, (err, data)=>{
//       if (err)
//        console.log("Failed to write File");
//       else
//        console.log("File Write Successful");
// });


// fs.appendFileSync("first.c",txt,(err, data)=>{
//         console.log("text append successfully");
// });


// -------------->>>>>>>>>>>>>>  CLOSE method  <<<<<<<<<<<<<<<<---------------------

fs.close