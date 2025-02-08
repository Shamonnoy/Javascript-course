// Events - The change in the state of an object is known as an event.
// Events are fired to notify code of "Interesting changes" that may effect code execution.
    //Mouse events(click, double click etc.)
    //Keyboard events(keypress, Keyup, keydown)
    //Form events(submit etc.)
    //print event and many more

// Event Handling in JS
    // node.event = () => {
        //Handle here
    // }

        // let btn1 = document.querySelector("#btn1");
        // btn1.onclick = () => {
        //     console.log("btn1 was clicked!!!");
        //     let a = 25;
        //     a++;
        //     console.log(a)
        // }
        
        // btn1.onclick = () => {
        //     console.log("Handler 2");//Overwrites the same event.
        // }

        // let div = document.querySelector("div");
        // div.onmouseover = () => {
        //     console.log("You are on the div!!!")
        // }


// Event Object = (e) (It is the special object thet has details about the event.)
    // node.event = (e) => {
        //Handle here
    // } 
    // e.target, e.type, e.clientX, e.clientY

        // btn1.onclick = (evt) => {
        //     console.log(evt);
        //     console.log(evt.type);
        //     console.log(evt.target);
        //     console.log(evt.clientX, evt.clientY);
        //     console.log("Handler 2");
        // }


// Event Listeners
    // node.addEventListener(event, callback)
    // node.removeEventListener(event, callback)
        let btn1 = document.querySelector("#btn1");
        
        btn1.addEventListener("click", () => {
            console.log("Button was clicked!!!");
        });
        
        btn1.addEventListener("click", () => {
            console.log("Button was clicked and handler2!!!");
        });

        const han3 = () => {
            console.log("Button was clicked and handler3!!!");
        }
        btn1.addEventListener("click", han3);

        btn1.addEventListener("click", () => {
            console.log("Button was clicked and handler4!!!");
        });

        btn1.removeEventListener("click", han3)