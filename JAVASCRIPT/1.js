/* 1 = Find Smallest */
// let a = Number(prompt("Enter a : "));
// let b = Number(prompt("Enter b : "));

// if (a > b) {
//     console.log("Value of a is : "+a);
//     console.log("A is Big");
// }
// else{
//     console.log("Value of b is : "+b);
//     console.log("A is Small");
// }


/* 2 = Positive Or Negitive*/

// let a = Number(prompt("Enter a : "));
// console.log("Enter A value : "+a);

// if (0 < a) {
//     console.log("A is Positive ");
// }
// else{
//     console.log("A is Negative ");
// }

/* 3 = Divisible By 5*/

// let n = Number(prompt("Enter n : "));
// console.log("Enter Value : "+n);

// if (n%5==0) {
//     console.log("Its Divisible By 5");
// }
// else{
//     console.log("Its Not Divisible By 5");
// }

/* 4 = Divisible By 5 Or 3*/

// let n = Number(prompt("Enter n : "));
// console.log("Enter Value : "+n);

// if (n%5==0) {
//     console.log("Its Divisible By 5 ");
// }
// else{
//     console.log("Its Not Divisible By 5 ");
// }
// if (n%3==0) {
//     console.log("Its Divisible By 3 ");
// }
// else{
//     console.log("Its Not Divisible By 3 ");
// }

/* 5 = Students Marks */

// let a = Number(prompt("Enter Maths : "));
// let b = Number(prompt("Enter Science : "));
// let c = Number(prompt("Enter English : "));

// console.log("Maths Marks : "+a);
// console.log("Science Marks : "+b);
// console.log("English Marks : "+c);

// let marks = a + b + c;
// let per = marks / 3;

// console.log("Obtain Marks :"+marks);
// console.log("Perchantage : "+per);

// if (marks > 75) {
//     console.log("Grad A");
// }
// else if(marks<=75 && marks>=60){
//     console.log("Grad B");
// }
// else if(marks<=60 && marks>=45){
//     console.log("Grad C");
// }
// else if(marks<=45 && marks>=35){
//     console.log("Grad D");
// }
// else
// {
//     console.log("Fail");
// }

/* 6 = leap year */


// let a = Number(prompt("Enter a : "));
// console.log("Enter  value : "+a);

// if (a%4==0) {
//     console.log("Leap Year");
// }
// else{
//     console.log("Not Leap Year");
// }

/* 7 = a,b,c Largest Among */


// let a = Number(prompt("Enter a : "));
// let b = Number(prompt("Enter b : "));
// let c = Number(prompt("Enter c : "));

// console.log("Value of a is : "+a);
// console.log("Value of b is : "+b);
// console.log("Value of c is : "+c);

// if (a > b && a > c) {
//     console.log("A is Big");
// }
// else if(!(b < c)){
//     console.log("B is Big");
// }
// else{
//     console.log("C is Big");
// }



/* 8 = Electricity */

let total ;
let unit = Number(prompt("Enter Unit : "));

console.log("Unit Is : "+unit);

if (unit >= 0 && unit <= 100) {
    total = (unit * 0.6) + 50 ;
}
else if (unit <= 100 && unit >= 300) {
    total = 60 + (unit - 100) * 0.8 + 50 ;
}
else if (unit <= 300) {
    total = 160 + (unit - 300) * 0.9 + 50 ;
}

if (unit >= 300) {
    total = total + total * 0.15;
    console.log("Total is : ",total);
}
else{
    console.log("Total Is : ",total);
}