// function greet(fname){
//     console.log("welcome", fname);
// }

// greet("men3m");


// var a = 3;
// var b = 6;
// console.log(a+b);

// greet("iti");

///////////////////////////////////////////

// var x = "abc";
// console.log(x);
// function sum(a,b){
//     x = "iti";
//     console.log(x);
//     return a+b;
// }

// var result = sum(5,6);
// console.log(x);


// var x = "abc";
// var b = "men3m";
// console.log(x);
// function sum(a,b){
//     var x = "iti";
//     // console.log(this);
//     console.log("outside x =",this.x)
//     console.log(x);
//     return a+b;
// }

// var result = sum(5,6);
// console.log(x);


// var x = "abc";
// console.log(x);
// function sum(a,b){
//     var i=0;
//     for(; i<3; i++){
//         console.log(i);
//     }
//     console.log(i++);
//     return a+b;
// }
// console.log("outside",i);
// var result = sum(5,6);
// console.log(x);



/////////////// Math ///////////////////////

// var result = Math;
// result = Math.PI;
// result = Math.sqrt(25);
// result = Math.pow(3,4);
// result = Math.abs(-135);
// result = Math.sign(-13);
// result = Math.sign(15);
// result = Math.sign(0);
// result = Math.max(12,24,534,23902,23);
// result = Math.min(0,-23,12,24,534,23902,23);
// result = Math.round(3.499999999999999);
// result = Math.floor(3.999999999999999);
// result = Math.ceil(3.12);
// result = Math.floor(Math.random()*10);
// result = Math.sin(90 * (Math.PI / 180));
// console.log(result);

// var c = 1;
// var x = 1e28;
// var y = 2e14;
// var z = x+y+c;
// console.log(z);



////////////////// Object ////////////////////

// var fname = "ali";
// var nickName = "kamel" ;
// var age = 24;
// var age2 = 18;
// console.log()


// var person = {
//     // key : value,
//     fname : "ali",
//     lname : "ahmed",
//     age: 14,
// };

// Accessing props (read, write)

// get (read)
// 1. Dot Notation:-
// console.log(person.fname);
// console.log(person.lname);
// console.log(person.age);


// 2. Subscript Notation:-
// console.log(person["fname"]);
// console.log(person["lname"]);
// console.log(person["age"]);


// set (write, reassign)
// person.fname = "men3m";
// console.log(person);
// console.log(person.fname);

// console.log(person.color);
// person.color = 'blue';
// console.log(person.color);


// person.age = 25;

// console.log(person);


// var person = {
//     fname : "ola",
//     lname : "ali",
//     age: 18,
//     color: "green",
//     address: {
//         city: "menoufia",
//         street: "paris",
//         code: "12345"
//     },
//     gender: 0,  // 0 f , 1 m
//     0: "zero",
//     1: "one",
//     2: "two",
// };


// var x=0;
// console.log(person[0])
// console.log(person[x])

// console.log(person.address.city);
// console.log(person["address"]["city"]);
// console.log(person["address"].city);
// console.log(person.address["city"]);


// var myKey = "age";
// console.log(person.myKey);    //  undefined
// console.log(person[myKey]);   // 18
// console.log(person["myKey"]); //  undefined

// for(var i=0; i<3; i++){
//     console.log(person[i])
// }

// var fname = "men3m";

// var person = {
//     fname : "ola",
//     age: 18,
//     display: function () { 

//         // console.log(this);
//         console.log(fname)

//         // console.log(this.fname);

//         // console.log("i'm a function");
//         // return undefined;
//      }
// };

// console.log(person.age);
// person.display();


// console.log(school)

/////////////////// DOM /////////////////////

// var h1 = document.getElementById("head1");
// console.log(h1);


// var elements = document.getElementsByClassName("parent");
// // console.log(elements);
// for(var i=0; i<elements.length; i++){
//     console.log(elements[i]);
// }

// var element = document.getElementsByClassName("parent")[0];
// console.log(element);


// var inputs = document.getElementsByTagName("input")[0];
// console.log(inputs.length);
// console.log(inputs);


// var inputs = document.getElementsByTagName("input");

// for(var i=0; i<inputs.length; i++){
//     console.log(inputs[i]);
// }


// var p = document.getElementsByTagName("p");
// console.log(p.length);
// for(var i=0; i<p.length; i++){
//     console.log(p[i]);
// }


// var names = document.getElementsByName("myInput");
// console.log(names.length);
// console.log(names);
// for(var i=0; i<names.length; i++){
//     console.log(names[i]);
// }


// div{

// }


// div.parent{

// }

// div .content{

// }

// .content{

// }

// var divs = document.querySelectorAll("div.new");
// console.log(divs);


// var divs = document.querySelectorAll("div.parent");
// console.log(divs);


// var p = document.querySelectorAll(".content");
// console.log(p);


//  var div = document.querySelector("div.parent")
//  console.log(div);



///////////////// Properties ////////////////////

// console.log(document.body);

// console.log(document.links)
// console.log(document.links.length);
// console.log(document.links[0]);

// console.log(document.images);
// console.log(document.images.length);
// console.log(document.images[0]);

// console.log(document.forms);
// console.log(document.forms.length);
// console.log(document.forms[0]);


// var parent = document.getElementById("parent");
// console.log(parent);

// select element based on another element!
// var p = parent.getElementsByClassName("content")[0];
// console.log(p);


// console.log(parent.firstChild);
// console.log(parent.firstElementChild);

// console.log(parent.lastChild);
// console.log(parent.lastElementChild);


// console.log(parent.childNodes)
// console.log(parent.children)

///////////////////////////////////////////////
// var parent = document.getElementById("parent");
// console.log(parent);

// var p = parent.getElementsByClassName("content")[0];
// console.log(p);

// how to change content using js
// innerText
// p.innerText = "<h1>welcome at egypt</h1>";

// innerHTML
// p.innerHTML = "<h5>welcome at egypt</h5>";


// textContent
// p.textContent = "welcome at egypt";

////////////////////////////////////////////

// how to change style using js
// style
// p.style.color = 'blue';
// classList
// p.classList.add("ppp");
// p.classList.remove("content");
// p.classList.toggle("ppp")
// p.classList.toggle("content")
// console.log(p)


// className
// p.className = 'ppp';
// console.log(p)
// p.className = 'content5';
// console.log(p)


var parent = document.getElementById("parent");
var p = parent.getElementsByClassName("content")[0];
function Execute(){
    p.innerHTML = "men3m";
    p.style.color='blue';
    console.log("btn clicked");
}

var input = document.getElementById("input");
function getInput() {
    console.log(input.value);
 }