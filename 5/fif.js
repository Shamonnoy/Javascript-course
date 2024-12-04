// Function: it is Block of code that performs a specific task, can be call whenever needed.

// function cook(){
//     console.log("Cook is coming");
// }
// function driver(){
//     console.log("Driver is coming");
// }
// function money(/*parameter*/){
//     console.log("MONEY IS COMING!!!");
// }
// cook();
// driver();
// for(let i = 0 ; i<=4 ; i++){
//     money(/*Argument*/);
//     console.log(i);
// }


// function myFunction(msg,n){
//     console.log(msg*n)
// }

// myFunction("I love JS",100);//NaN:Not a Number


// function add(a,b){
    //a and b are the local variables
    
//     let c=a+b;//this variables are useless outside the function.

//     console.log(c)
//     return c;
//     console.log(c);//It will print nothing because it is given after the return statement
// }

// add(20, 30);
// add(a,b);//It is not applicable here beacuse a and b are block scope variables.


//Modern JS
//arrow functions: Compact way to write a function
    //const functionName=(Param1, Param2...)=>{
    //}
        const arrowSum = (x , y)=>{
            console.log(x + y);
        };
        arrowSum(20 , 40);
        const arrowMul=(x , y)=>{
            console.log(x*y);
        };
        arrowMul(5 , 5);


// Practice questions
    // Returns the number of vowels from a string named "function"
        // function countVowels(str){
        //     let count=0;
        //     for(const char of str){
        //         if(char==="a" || char==="e" || char ==="i" || char==="o" || char==="u"){
        //             count++;
        //         }
        //     }
        //     console.log("No of vovels in str function are =",count);
        // }

        // countVowels("functions")

    // create an arrow function to perform the same task
        const vowels=(str)=>{
            let count = 0;
            for(const char of str){
                if(char==="a" || char==="e" || char ==="i" || char==="o" || char==="u"){
                    count++;
                }
            }
            console.log("No of vowels in str function are=",count + " in " + str);
        } 

        // let inp = prompt("Enter any string to find out how many vowels are there");

        vowels("function");

// ForEach loops in array(Higher order function/method)

    // arr.forEach(callBackFunction)
    // callBackFunction:Here, it is a function execute for each element in the array

    let arr = [1,2,3,4,5,6];
    arr.forEach(function printVal(val){//Value at each index.
        console.log(val);
    });

    // with Arrow function
    let str = ["a","b","c","d","e"];

    str.forEach((val, idx ,str) => {
        console.log(val,"=",idx, str);
    });

    
    let calcSquare = (num) => {
        console.log(num**2);
    };
    arr.forEach(calcSquare);



// practice questions
    // let n = [1,2,3,4,5,6];
    // n.forEach(function val(val){
    //     console.log(`square of ${val} is ${val*val}`)
    // })
    
    // n.forEach((num) => {
    //     console.log(`square of ${num} is ${num*num}`)
    // })


//Map method: Creates a new array with the results of some operation. The value its callback results are used to form a new array.

//arr.map(callbackFnx(value,index,array))
    let n = [10,20,30,40,50,60];
    let newArr = n.map((val) => {
        return val * val;
    })
    console.log(newArr);// new array
    console.log(n);


//Filter methods: Creates a new array of elements that gives true for a condition/filter.

    //let newArr= arr.filter((val)=>{
        // return val%2===0;    
    //})
    // only true elements will be stored in new array

    let eveArr = arr.filter((val)=>{
        return val % 2 === 0;
    });
    console.log(eveArr);


// Reduce method:performs some operations and reduces the array to a single value. It returns that single value.

    const output = arr.reduce((res, curr)=>{
        return res + curr;
    });

    console.log(output);


    const great = arr.reduce((prev, curr)=>{
        return prev > curr ? prev : curr;// if the prev is greater than curr, it will print prev otherwise the curr.
    });

    console.log(great);//6


//practice questions
    //  we are given array of marks of students. filter out the marks of student that scored 90+.

    let marks = [97, 64, 32, 49, 99, 96, 86, 90];
    let toppers= marks.filter((val)=>{
        return val > 90;
    });

    console.log(toppers);


    // Take a number n as input from user.create an array of numbers from 1 to n. 
    // Use the reduce method to calculate sum of all numbers in the array.
    // use the reduce method to calculate product of all numbers in the array.

    let t1 = prompt("Enter the number:");
    let narr = [];

    for(let i = 1; i<= t1 ; i++){
        narr[i-1] = i;
    }
    console.log(narr)

    const sum = narr.reduce((res, curr)=>{
        return res + curr;
    });
    console.log("Sum=",sum);

    const fact = narr.reduce((res, curr)=>{
        return res * curr;
    });
    console.log("Factorial=",fact);