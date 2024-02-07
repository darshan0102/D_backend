// object and class

//  let person = { 
//     age : 17,
//     greet : function(){
//         return ("hello good morning");
//     }
// };

//  person.name = "skill";
//  person.nationaltiy = "Indian";
//  console.log(person);
//  console.log(person.age);
//  console.log(person.greet());

//  delete person.age;
//  console.log(person);

//  object access property

// console.log(person.name);
// console.log(person["greet"]());

// class

// let person = {
//     name : "krish";
//     age :20,
//     marks : {
//         math : 55,
//         sci : 45,
//         eng :30,
//     },
//     hobbies : ["reading"]
// };

// console.log(person);
// console.log(person.marks);
// console.log(person.marks.math);
// console.log(person.hobbies[0]);


 class person{
    constructor(name,city){
        this.name = name;
        this.city = city;
    }greet(){
        return("HELLO " + this.name +"\n Lives in :" + this.city);
    }
}

 // let krish = new person("KRISH","SURAT");
 // console.log(krish.greet());



  // template litaral
  let a = 25, b = 50;
  //  let data = "Hello good morning guys";
  let data = `hello good morning
   ${a*b}${b}`;
   console.log(data);
   