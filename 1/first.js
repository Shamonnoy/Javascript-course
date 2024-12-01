// var, let, const

var: variables can be re-declared but can be changed.
let: variables can't be re-declared but can be changed. (Mostly used)
const: variables can neither be re-declaed nor be changed.



// Var in JavaScript (Old way)

var fullName = "Tony stark";
var age = 24;
var money = 999;
 console.log(fullname);
 console.log(age);
 console.log(money);

var fullName(camelCase)

x = null; (we know whats inside but it is empty)
y = undifined; (don't know what's inside) 
 console.log(x);
 console.log(y);

isfollow = true; //(Boolean value)
console.log(isfollow);



// Let in JavaScript
let age = 12;
age = 24;
age = 36;
console.log(age); (Output is 36)
let a;
console.log(a); (Output is undefined)

blocks
 {
     let a = 10;
     console.log(a); // (Output is 10)
 }
 {
     let a = 20;
     console.log(a); // (Output is 20)
 }



// const in JavaScript
const Name = "Jignes parsad";
Name = "Jhola parsad";
Name = "Joginder parsad";
console.log(Name); // (Output is error)
const b;
console.log(b); // (Output is error)



// Data types in js

//primitive datatypes
 let String= "name";
 let Number= 24;
 let Boolean= true/false;
//  Undefined
//  Null
//  BigInt
//  Symbol

//Non-primitive datatypes
//  Objects- It is a collections of values (Later in Course)
const student ={
    // key : Value
    fullName: "Shamonnoy Halder",
    age: 23,
    cgpa: 8.9,
    isPass: true
};
console.log(student);

student["fullName"] = "Sam";
console.log(student.fullName);

student["age"] = student["age"] + 2;
console.log(student["age"]);


const product = {
    fullName : "Parker Jotter",
    rate : 4 + "stars",
    offer : 5 + "%",
    price : 270 + "rs"
}

console.log(product)