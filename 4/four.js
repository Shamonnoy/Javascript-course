// Arrays in js: used between "[]" to store lenear datas systematically.

// array-mutable
// string-immutable
    // let marks = [45, 69, 90,100,23, 77];
    
    // console.log(typeof marks)


    // // Array indices
    // console.log(marks[4]);
    // console.log(marks[5]);
    // console.log(marks[100]); // undifined 
    // marks[3]= 55;
    // console.log(marks[3])  
    // console.log(marks);  

    // let marks = [];
    // let val = prompt("enter the number of the students");
    // for(let i=1 ; i<=val ; i++){
    //     if(val!==0){
    //         let ent = prompt("enter the marks");
    //         marks = ent;
    //         console.log(marks);
    //     }
    //     else if(ent===null){
    //         console.log("No number");
    //     }
    //     else{
    //         console.log("invalid number");
    //     }
    // }



// looping over an array
// loops -> iterable(string, objects, arrays)
    
    // for loop
    // for(let i= 0 ; i< marks.length ; i++){
    //     console.log(marks[i]);
    // }

    // for of loop
    // let games = ["valorant", "Bgmi", "CS go", "COD", "GOW"];
    // for(let game of games)
    // {
    //     console.log(game.toUpperCase());
    // }


    // practice questions
        // find the average marks of the entire class.
            // let marks=[85, 97, 44, 37, 76, 60];
            // let sum = 0;
            // for(let val of marks){
            //     sum = sum + val;
            // }

            // let avg = sum / marks.length;
            // console.log(`The average marks of the class = ${avg}`);

        
        // Change the array to store the final price after applying 10% offer.
        
            // let items = [250, 645, 300, 900, 50];
        // for-of loop
                
            // let i = 0;
            // for(let val of items){
            //     console.log(`value of index ${i} = ${val}`)
            //     let offer = val/10;// for 10%
            //     items[i] = items[i] - offer; // mrp - offer
                
            //     console.log(`value after offer = ${items[i]}`);
            //     i++;
            // }

        //for loop
            // for(let i=0 ; i< items.length ; i++){
            //     console.log(`item on index ${i} = ${items[i]}rs`);

            //     let offer = items[i] / 10;
            //     items[i] = items[i] - offer;
            //     console.log(`the discount is ${items[i]}rs`);
            // }

            
// Array methods

    // push(): Add to the end
    // pop(): delete from end and return
    // toString(): converts array to string

        // let food= ["potato","banana","lichi", "carrot", "apple"];
        
        // food.push("paneer","lassun");
        // food.pop();
        // console.log(food);
        // console.log(food.toString());

        // let marks = [98, 65, 23, 96, 69];
        // console.log(marks)
        // console.log(marks.toString());
    
    //concat():joins multiple arrays & returns result
    //unshift():add to start
    //shift():delete from the start and return

        // let marvelHeros = ["thor" , "Ironman" , "Captain" , "Hulk"];
        
        // console.log("Added at first =",marvelHeros.unshift("aandman","Kabutar man"));
        // console.log("Deleted =", marvelHeros.shift());
        // let dcHeros = ["Superman" , "Batman" , "Flash" ];



        // let heros = marvelHeros.concat(dcHeros);

        // console.log("Marvel =",marvelHeros)
        // console.log("Dc =", dcHeros)
        // console.log(heros);

    // slice(staetidx, endidx): returns a piece of the array
    // splice(startIdx,delCount, newEl1):change original array(add, remove, replace)

    // console.log(marvelHeros.slice(2, 4))
    
        // let num = [0,1,2,3,4,5,6,7];
        // console.log("Before =",num)
        // let upd = num.splice(2,2,120,250)
        // console.log(upd)
        // console.log("After =",num)


// Practice questions
    // create an array to store companies-> "Bloomberg","Microsoft", "Uber", "Google", "IBM", "Netflix"
    
    // a. Remove the first company from the array
    // b. Remove Uber and Add Ola in its place
    // c. Add Amazon at the end

    let arr = ["Bloomberg","Microsoft", "Uber", "Google", "IBM", "Netflix"];
    
    console.log("Before =",arr);
    console.log(arr.shift());//a
    console.log(arr.splice(1 , 1 , "Ola"));//b
    console.log(arr.push("Amazon"))//c
    console.log("After",arr);
    
    // console.log("before =",arr);
    // console.log(arr.splice(0,1));//a
    // console.log(arr.splice(1, 1,"Ola"));//b
    // console.log(arr.splice(6,0,"Amazon"));//c
    // console.log("After =", arr);