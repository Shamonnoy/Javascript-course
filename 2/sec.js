// Comments in Js

//  Comments a some line of codes which are not executed

// This is single line comment
/*This is a
Multiline comment */


// Operators in JS
// Used to perform some Operations on data

// Arithmatic Operators: +,-,*,/
//     let a = 10;
//     let b = 2;
//     console.log("a = ", a,"&", "b = ", b);
//     console.log("a + b = ", a + b);
//     console.log("a - b = ", a - b);
//     console.log("a * b = ", a * b);
//     console.log("a / b = ", a / b); 

// // Modulus: %
//     console.log("a % b =", a % b);

// // Exponentiation: **
//     console.log("a ** b =", a ** b);

    //unary operators
// Increment: ++
    // post increment
    // console.log("a++ bef =", a++); //a++(storing) = 11 (return 10)
    // console.log("a++ aft =", a); //[a++(Stored) = 11 (return 11)]

    // pre increment
    // console.log("++a bef =", ++a) //[++a(stored)= 11 (return 11)]

// Decrement: --
    // post decrement
    // console.log("a-- bef =", a--); //a--(storing) = 9 (return 10)
    // console.log("a-- aft =", a); //a--(Stored) = 9 (return 9)

    // pre decrement
    // console.log("--a bef =", --a) //--a(stored)= 9 (return 9)
    

// Assignment operator: =, +=, -=, *=, %=, **=

    // let c = 5;
    // let d = 4;
    // let e = 6;
    // let f = 7;
    // let g = 9;

    // c += 4; //c = c + 4
    // console.log("c = ", c); //9

    // d *= 4; //c = c * 4
    // console.log("d *= ", d);

    // e -= 4;
    // console.log("e -= ", e);

    // f %= 4;
    // console.log("f %= ", f);

    // g **= 4;
    // console.log("g **= ", g);


// Comparison operators: ==, ===, !=, !==, >, >=, <, <=

    // let a = 6;
    // let b = 5;

    // console.log("5 == 2", a == b); //false
    // console.log("5 != 2", a != b); //true
    
    // let c = 5; //number
    // let d = "5"; //string->number
    // console.log("5 == s5", c == d); //true
    // console.log("5 != s5", c != d); //false

    // (strictly compare without converting datatype)
    // console.log("5 === s5", c === d); //false 
    // console.log("5 !== s5", c !== d); //true


    // console.log("a < b", a < b);
    // console.log("a > b", a > b);

    // console.log("a <= b", a <= b); //false
    // console.log("a >= b", a >= b); //true


// logical operators: &&, ||, !
    // let tru = true;
    // let fal = false;

    // console.log("false AND false =", fal && fal );
    // console.log("false AND true =", fal && tru );
    // console.log("true AND false =", tru && fal );
    // console.log("true AND true =", tru && tru );

    // console.log("false OR false =", fal || fal );
    // console.log("false OR true =", fal || tru );
    // console.log("true OR false =", tru || fal );
    // console.log("true OR true =", tru || tru );

    // console.log("I am broke =",  ! fal );
    // console.log("I have a girlfriend =", ! tru );


// Conditional Statements(To implement some condition in the code)

    // let age = prompt("what is your age?");
    // if(age >= 18){
    //     console.log("you have responsibilities!!!");
    // }
    // else{
    //     console.log("you can enjoy");
    // }
     
    // let num = prompt("Enter your value");
    // if(num % 2 == 0){
    //     console.log(num, "is even");
    // }
    // else
    // {
    //     console.log(num, "is odd");
    // }

    // let marks = prompt("Enter the marks 0-100");
    // // console.log("1-20:F","21-40:D","41-60:C","61-80:B","81-100:A");
    // if(marks>=81 && marks<=100){
    //     console.log("you've got A marks",marks);
    // }
    // else if(marks>=61 && marks<=80){
    //     console.log("you've got B marks",marks);
    // }
    // else if(marks>=41 && marks<=60){
    //     console.log("you've got C marks",marks);
    // }
    // else if(marks>=21 && marks<=40){
    //     console.log("you've got D marks",marks);
    // }
    // else if(marks>=1 && marks<=20){
    //     console.log("you've got F marks",marks);
    // }
    // else{
    //     console.log("Invalid marks");
    // }


// Ternary operators (Condition ? true output : false output;)uses 3 operands

    // let age = prompt("Age is");

    // let result = age >= 18 ? "Not kid" : "Kid";
    // console.log(result);


// MDN Docs (Mozilla Developer Network)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript


// practice questions 

    // user input multiple of 5
    let num = prompt("Enter a number");

    if(num % 5 === 0){
        console.log(num, "is a multiple of 5!!!");
    }
    else{
        console.log(num, "is not a multiple of 5!!!");
    }

    
    // User input to give grades to marks
    let marks = prompt("Enter the marks 0-100");
    // console.log("1-20:F","21-40:D","41-60:C","61-80:B","81-100:A");
    if(marks>=81 && marks<=100){
        console.log("you've got A marks",marks);
    }
    else if(marks>=61 && marks<=80){
        console.log("you've got B marks",marks);
    }
    else if(marks>=41 && marks<=60){
        console.log("you've got C marks",marks);
    }
    else if(marks>=21 && marks<=40){
        console.log("you've got D marks",marks);
    }
    else if(marks>=1 && marks<=20){
        console.log("you've got F marks",marks);
    }
    else{
        console.log("Invalid marks");
    }
