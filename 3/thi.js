// Loops in js(Loops are used to execute a piece of code again and again)

// For loop
    // let num = prompt("Enter a number");
    // for(let i = 1 ; i<=10 ; i++){

    //     if(num != 0){
    //         console.log(num + " x " + i + " = " + (num * i));
    //     }
    //     else{
    //         console.log("Invalid input");
    //     }
        
    // }

    // Calculate the sum of n numbers
        // let n = prompt("Enter the number");
        // sum = 0;
        // for(let i = 1 ; i <= n ; i++){
        //     console.log("i = ",i);
        // }
        // console.log("loop has ended")


// infinite Loops (A loop that never ends)


// While loop
    // let num = prompt("Enter the number");
    // let i = 1;
    // while(i <= num){ // conditions
    //     console.log("i =", i);
    //     i++;
    // }


// do-while loop
    // let i = 1;
    // do{
    //     console.log("i =", i); //doing work
    //     i++;
    // }
    // while(i <= 5); // conditions with ";"


// for-of loop
    // let str = "Hello world";

    // let size = 0;
    // for(let i of str){ //iterator -> characters
    //     console.log("val =",i);
    //     size++;
    // }
    // console.log("String size =", size);


// for-in loop
    // let student = {
    //     name : "Kamalesh parsad",
    //     age: 24,
    //     grade: "A"
    // };
    // for(let key in student){
    //     console.log("Key =", key, "value =", student[key]);
    // }


// Practice questions
    // print all even numbers from 0 to 100
        // let num = 100;
        // for(let i = 0 ; i<=num ; i++)
        //     {
        //         if(i % 2 == 0){
        //             console.log(i);
        //         }
        //     }
        // let num = 100;
        // for(let i = 0 ; i<=num ; i++)
        //     {
        //         if(i % 2 == 0){
        //             console.log(i);
        //         }
        //     }

    // game number guessing
        // let no= 23;
        // let guess = prompt("Enter the number:");
        
        // while(guess != no){ //"!==" always work for srings "!=" for numbers and other
            
        //     guess = prompt("you've entered the wrong number, guess again!!!:");

        // }
        // console.log("the given value is the correct game number");


// String in JS
    // let str = 'This is string in single Inverted';
    // let str2 = "This is string in Double Inverted";

    // pri= str.length;

    // console.log(pri);
    // console.log(str[6]);


// Template literals (String interpolation)
// let val= `this is template literal ${expression}`;
    let obj={
        item: "Sabji",
        price: 130
    };
    let temlit=`the cost of ${obj.item} is ${obj.price} rupees`;// this is Template Literal print in which the value of price serves as a "String".
    console.log(temlit);

    console.log("the cost of", obj.item, "is", obj.price, "rupees");// this is normal print in which the value of price serves as a Number.

    
// Escape character
    // \n -> next line
    // \t -> assign some space
    val ="Escape\nCharacters\t is op"; //24
    console.log(val.length);


// string methods(Built in funtions to manupulate a string)
    // str.toUpperCase(): Make a string capital.
    // str.toLowerCase(): Make a string Small.
    // str.trim():  white spaces.
    // str.slice(start,end): Returns part of string.
    // str1.concat(str2): Joins one string with another.
    // str.replace(searchVal, newVal): Use to search and changes a value in a string.
    // str.charAt(idx): this is use to find out a character in a string

    let str = "This is sam";
    

    // UpperCase (it don't changes(immutable) the string but return a new UpperCase string.)
    let str1 = str.toUpperCase();
    console.log("original string =", str);
    console.log("uppercase string =", str1);


    // LowerCase(it don't changes(immutable) the string but return a new LowerCase string.)
    let str2 = str.toLowerCase();
    console.log("original string =", str);
    console.log("lowercase string =", str2);

    str = str.toLowerCase();
    str = str.toUpperCase();
    console.log("Last str value because str can be overwrite its value =", str);


    // Trim method(removes white spaces of start and end)
    let tri= "   White spaces are   removed from start and end.    "
    console.log(tri.trim());


    // slice method(Returns part of string)
    let slice="01234567"
    console.log(slice.slice(0,4));
    console.log(slice.slice(5,7));
    console.log(slice.slice(1,5));


    // str1.concat(str2):Joins one string with another.

    let st1 = "My name is ";
    let st2 = "Shamonnoy Halder";
    let res = st1.concat(st2);
    // res = str1 + str2;
    console.log(res);//My name is Shamonnoy Halder.


    // str.replace(searchVal, newVal): Searches and changes a value in a string
    let con= "hellolololo";
    console.log(con.replace("lo","p"));
    console.log(con.replaceAll("lo","p"));


    // str.charAt(index): this is use to find out a character in a string
    console.log(con.charAt(3));