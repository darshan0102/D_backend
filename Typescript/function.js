// function
// function add(a , b ) 
// {
//     return a + b; 
// }
// console.log(add(2,5));
// console.log(add (2,'5'));
// INTERFACE
// interface hello {
//     name?: string
//     email?: string
//     age?:number
// }
// let person = {
//     name : 'john',
//     age: 38,
//     job:'devloper',
// }
// console.log(person);
// ENUM
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["hello"] = 2] = "hello";
})(gender || (gender = {}));
var x = gender.male;
console.log(x);
