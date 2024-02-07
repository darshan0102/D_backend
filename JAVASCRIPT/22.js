// for in loop and for of loop 

//  let person = {
//     name:"darshan",
//     age:"17",
//     email:"darshanchauhan5064@gmailcom",
// };

// let person = [11,22,33,44,55];

// let txt ="";
// for(let i in person){
//     txt += person[i] + "\n";
// } 

// console.log(txt);


//  ****  for of loop ****

//  let person = [11,22,33,44,55];

//  let txt = "";

//  for(let i of person){
//     txt += i + "\t";
// }

//  console.log(txt);

//    .....rest psrsmeter / spread oprator

let person = {
    name:"darshan",
    age:"17",
    email:"darshanchauhan5064@gmail.com",
};

//  let data = person;
 let data = {...person};

//  person.slary = 1500;

 data.hobbies = ["music","dancig"];
 console.log(person);
 console.log(data);








