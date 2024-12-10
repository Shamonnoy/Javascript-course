// Practice question
    // 1. Create a h2 heading element with text-"Hello JavaScript".Append "from Apna College students" to this text using JS.

        let head = document.querySelector("h2");
        console.dir(head.innerText);
    
        head.innerText = head.innerText + " from Apna College students";

    // 2. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
        
        let divs = document.querySelectorAll(".box");
        

        let idx = 1;
        for(div of divs){
            div.innerText = `New value ${idx}`;
            idx++;
        }
