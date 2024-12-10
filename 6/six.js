// DOM-Document Object Model(Part 1)

    // What is DOM
        // When a web page is loaded,the browser creates a Document Object Model(DOM) of the page.

    // We can access the HTML file by using Document.

        // console.dir(document.body);
        // console.log(document.body);
        // console.log(document.body.childNodes[2]);

        // Changes the body bgc
        // document.body.style.background = "green";

    //Changes the text of a certain childNode
        // document.body.childNodes[1].innerText= "abcd"// Dynamic Changes


// DOM Manipulation

    // Selecting with id
        let heading = window.document.getElementById("heading");
        console.log(heading);//id should be unique
        console.dir(heading);

    // Selecting with class(HTML Collections)
        let headings = document.getElementsByClassName("topic");
        console.log(headings);
        console.dir(headings);

    // Selecting with tag
        let para = document.getElementsByTagName("p");
        console.log(para)
        console.dir(para)

    
    // Query Selector(Node list to access elements)

    //document.querySelector("tag/.class/#id")
    //document.querySelectorAll("tag/.class/#id")
        let firstEl = document.querySelector("p");//only for one element
        console.dir(firstEl);

        let secEl = document.querySelector("#heading");
        console.log(secEl);

        let thiEl = document.querySelector(".butt")
        console.log(thiEl);

        let allEl = document.querySelectorAll(".topic");// all elements
        console.dir(allEl);

    
    // properties
        // tagName: returns tag for element Nodes
            console.log(firstEl.tagName);
            console.log(secEl.tagName);
            console.log(thiEl.tagName);
            console.log(allEl.tagName); //not applicable for querySelectorAll.

        // innerText: returns the text content of the element and all its children.

            console.log(firstEl.innerText);
            console.log(secEl.innerText);
            console.log(thiEl.innerText);
            console.log(allEl.innerText);

                        //   body(parent)
                    
                    //div(par)   |     Script
                
                // img|h1|p|div(childNodes)    

            let fruits= document.querySelector(".fruits")
            console.dir(fruits)
            console.log(fruits.innerText)

        // innerHTML: return the plain text or HTML content in the element.

            console.log(fruits.innerHTML)
            // <h3>Fruits</h3>
            // <ul>
            //     <li>grapes</li>
            //     <li>Watermellon</li>
            //     <li>guava</li>
            // </ul>
            fruits.innerText= "Hello"
            fruits.innerHTML="<h2><b>HELLO</b></h2>"

        //textContent: returns textual content even for hidden elements.
        

// Practice question
    // 1. Create a h2 heading element with text-"Hello JavaScript".Append "from Apna College students" to this text using JS.