// var input = document.getElementById("input");
// console.log(input);

// console.log(input.attributes);

// for(var i=0; i<input.attributes.length; i++){
//     console.log(input.attributes[i]);
// }

// console.log("-------------");
// console.log(input.getAttribute("oninput"));
// console.log(input.getAttribute("class"));
// console.log(input.getAttribute("value"));

// console.log(input);
// input.setAttribute("class", "abc");


// not exist attribute => null
// console.log(input.getAttribute("href")); 

// console.log(input.hasAttribute("href"));
// console.log(input.hasAttribute("value"));

// console.log(input);
// input.removeAttribute("placeholder")
// console.log(input);

/////////////////////////////////////////

// var link1 = document.links[0];
// console.log(link1);
// link1.setAttribute("class", "abc")
// console.log(link1);

// if (link1.hasAttribute("href")){
//     link1.removeAttribute("href");
// }
// else {
//     link1.setAttribute("href", "https://google.com");
// }

// console.log(link1);
// link1.removeAttribute("class");

// console.log(link1);

//////////////////////////////////////////
// var tag = "p";
// var p = document.createElement(tag);


// var person = {
//     fname : "bassant"
// };

// person.address = "cairo";
// console.log(person);



// var p = document.createElement("p");
// p.setAttribute("id", "pp");
// p.className = "content";
// console.log(p);
// // p.innerHTML = "this is angular track";
// var textNode = document.createTextNode("this is angular track");
// p.appendChild(textNode);


// var parent = document.getElementsByClassName("new")[0];
// parent.appendChild(p);

////////////////////////



// var c1 = document.createComment("this is iti");
// console.log(c1)


//////////////////////////////////////

// var parent = document.getElementsByClassName("new")[0];
// // console.log(parent);

// var span = document.createElement("span");
// span.setAttribute("class", "content");
// // span.innerText = "iti";
// var textNode = document.createTextNode("i'm iti");

// // span.innerHTML = textNode;
// // span.append(textNode);
// span.append("itian");
// console.log(span)

/*
           appendChild        append
text          error            ok
textNode       ok              ok
multiple      first one        ok
return         yes             no
*/

//////////////////////////////////////

// var parent = document.getElementsByClassName("new")[0];
// console.log(parent);

// var span = document.createElement("span");
// span.setAttribute("class", "content");
// var result = span.append("itian");
// console.log("result =", result)
// result = parent.append(span);
// console.log("result =", result);

// var textNode = document.createTextNode("i'm iti");
// var output = span.appendChild(textNode);
// console.log("output =", output);

// output = parent.appendChild(span);
// console.log("output =", output);



// console.log(span)

//////////////////////////////////////////////////

// var parent = document.getElementsByClassName("new")[0];
// console.log(parent);

// var h1 = document.createElement("h1");
// h1.setAttribute("id", "head3");
// var textNode = document.createTextNode("hello angular track");
// h1.appendChild(textNode);

// console.log(h1);

// var p = document.createElement("p");
// p.setAttribute("class", "content");
// p.innerHTML = "this is iti";
// console.log(p);


// parent.appendChild(h1, p); // doesn't support multiple append
// parent.append(h1, p); // support multiple append


////////////////////////////////

// var parent = document.getElementsByClassName("new")[0];

// var p = document.createElement("p");
// parent.append(p);

// p.setAttribute("class", "content");
// p.innerHTML = "this is iti";
// console.log(p);


//////////////////////////////////////////////////


// var btn = document.getElementById("btn2");
// console.log(btn);

// var i = 1;
// function CreateElement(){
//     console.log("btn clicked");

//     var p1 = document.createElement("p");
//     p1.innerHTML = "<h4>this is sameh"+ i + "</h4>";
//     btn.before(p1);
//     i++;
//     var p2 = document.createElement("p");
//     p2.innerHTML = "<h4>this is sameh"+ i + "</h4>";
//     btn.after(p2);
// }

//////////////////////////////////////////////////
/// Events

// 1. Add Attributes
// var btn = document.getElementById("btn");
// console.log(btn);
// function Execute() { 
//     console.log("btn was clicked");
// }
// function dbClick() { 
//     console.log("button was clicked twice");
// } 

// 2. Attach Function


// var person = {fname:"men3m"};
// person.color = "green";
// console.log(person);


// var btn = document.getElementById("btn");

// function execute() { 
//     console.log("btn was clicked");
//     // return undefined;
// }

// func will be executed by js 
// js will call it when event is fired!
// btn.onclick = execute;


var h1 = document.getElementById("head1");
function changeContent(){
    h1.innerHTML = "<h3>Our Tracks</h3>"
}

function changeStyle(color){
    h1.style.color = color;
}

// var btn = document.getElementById("btn");
// btn.onclick = changeContent;
// btn.onclick = changeStyle;

// var person = {fname:"men3m"};
// person.fname = "iti"; // override 
// console.log(person);


///////////

// 3. Add Event Listener

// var btn = document.getElementById("btn");
// function cb() { 
//     console.log("hi"); 
// }

// btn.addEventListener('click', changeContent);
// btn.addEventListener('mouseenter', changeStyle);

// btn.addEventListener('click', changeContent);
// btn.addEventListener('click', changeStyle);


///////////////////////////////////////////////
            // tricks
// 1
// var btn = document.getElementById("btn");

// function cb() { 
//     changeContent();
//     changeStyle();
//  }

// btn.onclick = cb;

// btn.onclick = function () { 
//     changeContent();
//     changeStyle();
// };

// 2.

// var btn = document.getElementById("btn");

// function cb() { 
//     changeStyle("red"); 
// }

// btn.onclick = cb;



// function greet(fname){
//     console.log("hi" + fname);
// }

// greet("sameh");




// var btn = document.getElementById("btn");
// btn.onclick =




// function greet(){
//     console.log(arguments);
//     console.log("hi");
// }

// // greet();

// greet("sameh");

//////////////////////////////////////////////////

// var btn = document.getElementById("btn");

// function cb(e) { 
//     console.log(arguments);
//     console.log(e);
//     console.log(e.target);
//     changeStyle("red"); 
// }

// btn.onclick = cb;
// btn.addEventListener('click', cb);

////////////////////////


// var btn = document.getElementById("btn");

// function callback(e){
//     console.log(e);
//     changeStyle("red");
// }

//////////////////////////////

var input = document.getElementById("input1");
var span = document.querySelector(".errorMessage");
input.addEventListener('input', function () { 
    var text = input.value;
    if(text.length <= 3 && text.length > 0){
        span.style.display = 'block';
        input.style.border = "2px solid red";
    }
    else {
        span.style.display = 'none';
        input.style.border = "2px solid green";
    }
 })

// input.onblur = function () { 
//     input.style.border = "2px solid green";
//  }

//  input.onfocus = function () { 
//     input.style.border = "2px solid red";
//  }


function login(e){
    e.preventDefault();
    console.log("data sent");
}