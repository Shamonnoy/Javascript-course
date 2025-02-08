// Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again
    //method 1
        // let modeBtn = document.querySelector("#mode");
        // let mode = "light";

        // modeBtn.addEventListener("click", () => {
        //     if(mode === "light"){
        //         mode = "dark";
        //         let body = document.querySelector("body");
        //         body.style.backgroundColor = "#212121" 
        //     }

        //     else{
        //         mode = "light";
        //         let body = document.querySelector("body");
        //         body.style.backgroundColor = "white"
        //     }

        //     console.log(mode)
        // });

    //method 2
        let modeBtn = document.querySelector("#mode");
        let body = document.querySelector("body");
        let mode = "light";

        modeBtn.addEventListener( "click", ()=>{
            if(mode === "light"){
                mode = "dark";
                body.classList.remove("light")
                body.classList.add("dark")
            }
            else{
                mode = "light";
                body.classList.remove("dark")
                body.classList.add("light")
            }
            console.log(mode);
        })