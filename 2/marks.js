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
