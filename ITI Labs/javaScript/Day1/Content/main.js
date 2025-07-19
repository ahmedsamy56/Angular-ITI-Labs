// console.log("hello js");

// var x = 5;
// console.log("x = ",x);

// var age = 20;

// var itiTrackName = "Angular";
// console.log(itiTrackName);

var flag = true;

// var salary = 12345.123;

// var students = ["Sameh", "Salama", true, 35, []]


/*
                  Types
    Not Typed               Typed
                 Loosely Type     Strongly Typed
                    JS             C#, Java, CPP
                  var x = 1;        int x = 5;
                  x = "iti";        x = "men3m";

*/


/*
                Data Types in JS
    Primitive DT          Reference DT
1. Number                 - Any value except 
2. String                   primitive data types
3. Boolean
4. Undefined
5. Null
6. Symbol (in ES6)
*/


// 1. Reassign
// var x = 5;
// x = "angular";
// x = false;
// x = 5.6;
// console.log("type of x =", typeof(x));

// 2. Redeclaration
// var age = 22;
// console.log("1) ",age);
// throw new Error("stop");
// var age = "iti";
// console.log("2) ",age);

// var myName;
// console.log(myName);

// console.log(fname);
// var fname;



// // 2. Redeclaration
// var age = 22;
// console.log("1) ",age);



// var age = "iti";
// console.log("2) ",age);





//////////////////////////////////////

//         dt          value
// null   null         empty object
// zero   number          0

// Literal Creation
// var fname = "sameh";
// console.log(fname);

// Method Creation
// var lname = String("Ola");
// var age = Number(25);
// var flag = Boolean(false);
// console.log(lname);
// console.log(age);
// console.log(flag);




// var y = Number("50");
// console.log("type :", typeof y); // number
// console.log("value :", y);       // 50
// console.log("isNaN :",isNaN(y)); // false

// var z = Number("ITI");
// console.log("type :", typeof z); // Number
// console.log("value :", z);       // NaN
// console.log("isNaN :",isNaN(z)); // true
// NaN: not a number

// isNaN() [true, false]

// var temp = Number("mona") 
// console.log(isNaN("5"));
// console.log(isNaN("mona"));
// console.log(isNaN(undefined));

// var flag = Boolean("ali") 
// console.log(flag);

// flag = Boolean([10, 20]) 
// console.log(flag);

// flag = Boolean(NaN) 
// console.log(flag);


/*
    A. Falsy Values
        1. Zero
        2. undefined
        3. NaN
        4. Null
        5. ""
        6. false

    B. Truthy Values
        - Any value except falsy values is considered a truthy value.


*/

//////////////////////////////////


// (1) +

// var a = 4;
// var b = 6;
// console.log(a+b);

// var a = "4";
// var b = "6";
// console.log(a+b); // 46 string

// +  sum (addition), concatination

// var a = "mona";
// var b = "ali";
// console.log(a+b); // concatination


// var a = "mona";
// var b = 15;
// console.log(a+b); // concatination


// console.log(typeof b);

// Coercion: process in which js engine convert variable's type to another type


// var a = "6"; // 6
// var b = 15; // 15
// console.log(a+b); // 21

// var a = NaN; // NaN
// var b = 15;     // 15
// console.log(a+b); // 21


// var result = undefined + undefined;
// result = 10 + undefined;
// result = 5 + NaN;
// result = null + null;
// result = null + 10;
// result = null - 10;

// var result = undefined;

// result = 10 - 7;
// result = 10 - "7";
// result = 10 - "ali";
// result = Number(10) - Number("ali");
// console.log(result);

/////////////////////////////////////

// var a = 15;
// var b = -2;
// console.log(a == b);


// var a = "15";
// var b = 15;

// var a = "mona";
// var b = "ali";

// var a = true;
// var b = "true";

// console.log(a == b);  // false
// console.log(a === b); // false


// == : values
// ===: values & data type



// var x = false;
// var y = false;
// console.log(x||y);

// var x = true;
// var y = true;
// console.log(x&&y);

// var x = false;
// console.log(!x);


// var x = undefined;
// var y = 0;

// console.log(x&&y);



// var result;

// result = 0 && undefined; // 0
// result = "" && "ali";    // ""
// result = "ali" &&  0;    // 0
// result = "mona" && "ali"; // ali
// result = "mona" || "ali"; // mona
// result = "mona" || "";    // mona
// result = undefined || 0;  // 0
// result = "undefined" || undefined; //"undefined"
// result = "undefined" && undefined; // undefined
// result = undefined || "undefined"; //"undefined"

// console.log(result);


/////////////////////////////////////////

// var x = -15;

// if (x > 0){
//     console.log("x > 0");
// } 
// else if(x < 0) {
//     console.log("x < 0");
// }
// // else if (/*condition*/){
// //     // block of code
// // }
// else {
//     console.log("x = 0");
// }


// Ternary Operator
// var a = 21;

// if(a % 2 == 0){
//     console.log("even");
// } else {
//     console.log("odd");
// }

// var a = 212;

// // cond.     ?      true           :      false      
// (a % 2 == 0) ? console.log("even") : console.log("odd");


// var x = 12;
// (x > 0)
//     ? console.log("x > 0")
//     : (x < 0)
//         ? console.log("x < 0")
//         : console.log("x = 0");

// if(x > 0)
// {
//     console.log("x > 0");
// }
// else
// {
//     if(x < 0)
//     {
//         console.log("x < 0")
//     }
//     else 
//     {
//         console.log("x = 0");
//     }
// }


// for(var i = 0; i < 10; i++)
// {
//     if(i%3==0){
//         continue;
//     }
//     console.log(i);
// }

// var i = 0;
// while(true){
//     if(i>=10){
//         break;
//     } // infinty loop
//     console.log(i);
//     i++;
// }


// var i = 20;
// do{
//     console.log(i);
//     i++;
// }while(i<10);

// do{
//     var input = Number(prompt("please enter your age"));
// }while(isNaN(input));
// console.log(input);



// console.log(karam);
// var karam;



// document.writeln("<h4>this is sparta</h4>")
// document.write("<h5>this is sparta</h5>")



// alert("this is iti");

// var result = confirm("r u good?");
// console.log(result);