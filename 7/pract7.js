// Practice questions
// Qs. Create a new button element. Give it a text "click me", background color of red & text color of white. Insert the button as the first element inside the body tag. 

    let butt = document.createElement("button");
    butt.innerText = "Click me"
    let body = document.querySelector("body")
    body.prepend(butt)
    butt.style.backgroundColor = "red"
    butt.style.color = "white"


// Qs. Create a <p> tag in html, give it a class & some styling.Now create a new class in CSS and try to append this class to the <p> element. Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.

    let para = document.querySelector("p");
    // para.setAttribute("class","newClass");
    para.classList.add("newClass")