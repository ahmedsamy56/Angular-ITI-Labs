// sequential programming paradiam

// var a = 2;
// var b = 12;
// console.log(a*b);

// // 100

// var c = 17;
// var d = 15;
// console.log(c+d);

// // 200 lines of code

// var a = 2;
// var b = 12;
// console.log(a+b);

// Functional Programming Paradiam

// function func(){
//     console.log("I'm a function")
// }

// func(); // calling function
// console.log(func);

// var fname = func;
// console.log("fname :",fname);
// // func();
// func();
// func();
// func();
// func();
// func();


// function sum(a,b) { 
//     return a+b;
//  }

// function mul(a,b) { 
//     return a*b;
//  }

  

//  sum(3,8);

// console.log(sum(3,8)) ; // 1    
// var add = sum(3,8);    // 2
// console.log(add);
// var multi = mul(sum(3,8), 2); // 3
// console.log(multi);


// function add() { 
//     var x = 4;
//     var y = 6;
//     console.log(x+y);
//  }



// function add2() { 
//     var x = 7;
//     var y = 9;
//     console.log(x+y);
//  }

// function add(x,y) { 
//     console.log(x+y);
//     console.log(x);
//     console.log(y);
//     console.log(arguments[arguments.length-2]);
//  }

// add(2,6);

// parameters vs arguments

// add(20,6,8);
// add(20);
// add(20,6,8, 23,354,46);

// add("mona", "ali");
// add("mona", 55);
// add(true, true);

// console.log(Number(true));


// function  sum(a, b){
//     return a+b;
// }

// function sub(a, b){
//     console.log(a-b) ;
    // return undefined;  // js returns implicitly undefined foreach function doesn't have return value!
// }

// var result = //sub(2,6);
// console.log(result);

// var visa = "1257890532112578905321";
// var amount = 124.5;
// console.log(Pay(visa, amount));


// function greet(fname) { 
//     // var temp = "test";
//     // if(fname == undefined)fname= temp; // ok
//     //if(fname == undefined)fname= "temp"; // ok

//     // short circuits

//     fname = fname || "test";

//     console.log("welcome", fname, "at iti");
//  }

//  greet();
//  greet("men3m");


////////////////////////////////////////////

// 1. Built-in functions
// var x = Number("55");
// console.log(typeof(x));
// console.log(isNaN(x));

// 2. User Defined functions
        // 1. Function Statement (Function Declaration)
        // 2. Function Expression
        // 3. Anonymous Function (Function on the fly)
        // 4. Callback Function (most popular)

// 1. Function Statement (Function Declaration)
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(24,534));


// 2. Function Expression
// var result = function (a,b){
//     return a+b;
// }

// console.log(result);


// var result = function (a,b){
//     console.log(a+b);
    // return undefined;
// }

// console.log(result(5,3));

// console.log(result(12,54));
// console.log(sum(24,534));

// 3. Anonymous Function
// function (a,b){
//     return a+b;
// }

//////////////////////////////////////////////////

// console.log(window);
// console.log(this);

// var x = 6;
// var y = x;

                // Hoisting

// console.log(age); // undefined
// var age = 22;
// console.log(age); // 22
// console.log(x); // error
// const x = 10;
// console.log(x); // 10

// sum(24,1);  // 25
// function sum(a,b) { 
//     console.log(a+b); 
// }
// sum(14,1); // 15

// // result(24,1); // undefined(24,1); // error: result is not a function
// console.log(result);
// var result = function (a,b) { 
//     console.log(a+b); 
// }
// result(24,1); // 25

///////////////////////////////////////////////////

            // Callback Function

// function greet(func,a,b){
//     // console.log("hi");
//     console.log(func);
//     console.log(func(a,b));
// }

// // greet("men3m");

// var result = function (){
//     console.log("I'm a callback function");
// }

// var add = function(a,b){
//     // var a = 2,  b= 6;
//     // var a = Number(prompt("enter first number"));
//     // var b = Number(prompt("enter second number"));
//     return a+b;
// }
// // greet(result)

// // greet(function (){ console.log("I'm a callback function"); });

// var x = 5;
// var y = 5;
// // greet(add(x,y));//xx
// greet(add,x,y);//xx


// var agreed = confirm("facebook wants to access your location");

// function getLocation(allow, block){
//     if(agreed){
//         allow();
//     } else {
//         block();
//     }
// }

// function GrantAccess(){
//     console.log("your location is menoufia");
// }

// function DenyAccess(){
//     console.log("you are not allowed to access my location");
// }

// getLocation(GrantAccess, DenyAccess);

// another solution

// getLocation(
//     function(){console.log("your location is menoufia");}
//     ,
//     function (){console.log("you are not allowed to access my location");}
// );


// function angularTrack (){
//     console.log("welcome angular track");
// }

// function greet(cb, time){
//     console.log("wait ", time, "seconds");
//     cb();
// }


// greet(angularTrack, 4);

////////////////////////////////////////////////////
            // String Object

// var fname = "hElLo men3m";
// console.log(fname[0]);
// console.log(fname[100]);
// console.log(fname[-100]);
// console.log(fname.indexOf('l'))
// console.log(fname.lastIndexOf('l'))
// for(var i=0; i<fname.length; i++){
    // console.log(fname[i])
    // console.log(fname.charAt(i))
    // console.log(fname.at(-i))
// }

// var out = fname.includes("el");
// console.log(out);
// out = fname.includes("El");
// console.log(out);

// immutable vs mutable : compexity = O(3)
// var lowerCased = fname.toLowerCase();
// console.log(lowerCased);
// var upperCased = fname.toUpperCase();
// console.log(upperCased);

// fname = "welcome at iti";
// var words = fname.split(" ");
// console.log(words);

// fname = "welcome;at;iti";
// words = fname.split(";").reverse().join("---");
// words = fname.split(";").reverse().join(" ");
// console.log(words);


// fname = "username=ali;password=123";
// var props = fname.split(";");
// console.log(props);
// for(var i=0; i<props.length; i++){
//     var arr = props[i].split("=");
//     var key = arr[0];
//     var value = arr[1];
//     console.log(key, "=", value);
// }


// console.log(fname);
// var ok = fname.startsWith("hE")
// var ok = fname.startsWith("hE", 0)
// console.log(ok);
// var ok = fname.startsWith("hE", 1)
// console.log(ok);

// var ok = fname.endsWith("3m", 11)
// console.log(ok);


// fname = "    hello                  ";
// console.log(fname, fname.length)
// console.log(fname.trim(), fname.trim().length)
// console.log(fname.trimEnd(), fname.trimEnd().length)
// console.log(fname.trimStart(), fname.trimStart().length)

// var firstName = "ali";
// var midName = "ahmed";
// var lastName = "omar";
// var fullName = firstName.concat(midName, lastName);
// console.log(fullName);

//////////////////////////////////////////////////////////
            // Array

var arr = [
    "mahmoud", 
    "yousef", 
    "salma", 
    "hazem", 
    true, 
    12, 
    [
        function sum(a,b){
            return a+b;
        }, 
        false
    ]
];

// console.log(arr);
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// doesn't have a fixed size

// arr.push("men3m");  // add at last (append)
// arr.unshift("iti"); // add from beginning

// var popped = arr.pop();
// console.log(popped);

// var poppedElement = arr.shift();
// console.log(poppedElement);

// var arr2 = [12,523];
// arr = arr.concat(arr2);
// arr.reverse();


var arr1 = [12, 3, 105, 91, 19, 38];
arr1.sort();  // xxx (sort using ascii code);
console.log(arr1);

// self study on how to sort array of numeric values

// for(var i=0; i<arr1.length; i++)
// {
//     for(var j=i+1; j<arr1.length; j++)
//     {
//         if()
//     }
// }
