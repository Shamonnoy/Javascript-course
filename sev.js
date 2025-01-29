// DOM Manipulation


// Attributes
    // getAttribute(attr): to get the attribute value
        let div = document.querySelector("div");
        console.log(div);

        let id = div.getAttribute("id");
        console.log(id);
        let name = div.getAttribute("name");
        console.log(name);

    // setAttribute(attr,value): to set attribute value
        let p = document.querySelector("p");
        let clas = p.setAttribute("class","newclas");
        console.log(clas);


// Style
    // node.style
        div.style.backgroundColor="blue"
        div.style.fontSize="20px"
        

        div.innerText="Hello!!!"

        let bg = document.querySelector("body");
        bg.style.backgroundColor="beige";

        p.style.color="black";
        // p.style.visibility="hidden";


//Insert Elements(Create element -> Add element)
    //let ele=document.createElement("div") Creates an element

    //node.append(element) add at the end of the node(inside)
    //node.prepend(element) add at the start of the node(inside)
    //node.before(element) add before the node(outside)
    //node.after(element) add after the node(outside)
    
        let newBtn=document.createElement("button");
        newBtn.innerText="Click me!!!";
        let items = document.querySelector("#items");
        // items.append(newBtn);
        // items.prepend(newBtn);
        // items.before(newBtn);
        // items.after(newBtn)

        

        // let head= document.createElement("h1")
        // head.innerHTML= "<i>This is heading</i>";
        // let body = document.querySelector("body")
        // body.prepend(head)
    
//Delete Elements
    // node.remove()    

        let para = document.createElement("p");
        para.innerText = "This is the paragraph!!!";
        let body = document.querySelector("body");
        body.append(para)

        p.remove();


// HW 
// node.appentChild(el)
    let list=document.createElement("li");
    list.innerText="Item4";
    let ul = items.querySelector("ul");
    ul.appendChild(list);

// node.removeChild()