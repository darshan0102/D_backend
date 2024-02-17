// http Module

 const http  = require('http');

 const server = http.createServer((req, res) => {
    res.end('welcome to local server........1');
 });
  

   server.listen(9686, () => {
    console.log('server is running on port 9686');
 });






 const server2 = http.createServer((req, res) => {
    res.end('welcome to local server........2');
 });
  

   server2.listen(9687, () => {
    console.log('server is running on port 9687');
 });







 
const server3 = http.createServer((req, res) => {
    res.end('welcome to local server........3');
 });
  

   server3.listen(9688, () => {
    console.log('server is running on port 9688');
 });







 const server4 = http.createServer((req, res) => {
    res.end('welcome to local server........4');
 });
  

   server4.listen(9689, () => {
    console.log('server is running on port 9689');
 });




 
 

 const server5 = http.createServer((req, res) => {
    res.end('welcome to local server........5');
 });
  

   server5.listen(9690, () => {
    console.log('server is running on port 9690');
 });