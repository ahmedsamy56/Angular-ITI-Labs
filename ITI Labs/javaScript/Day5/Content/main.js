// console.log("hi")

// console.log(window);

// var person = {
//     fname: "men3m"
// };

// console.log(person.fname);

// alert("welcome at iti");

// window.alert("welcome at iti");

// [window] object is optional

var openedWindow;

function openWindow(){
    // console.log("window opened");
    // window.open();
    // window.open("https://www.google.com", "_blank"); // default: _blank
    // window.open("https://www.google.com", "_self");
    // window.open("https://www.google.com", "", "width=300,height=300");
    // window.open("./about.html", "", "width=300,height=300");

    openedWindow = open("./about.html", "", "width=300,height=300");
}

function closeWindow(){
    if(openedWindow != undefined){
        openedWindow.close();
    } else {
        console.log("there's no openening window");
    }
}

function moveToWindow(){
    openedWindow.moveTo(500, 500)
}

function moveByWindow(){
    openedWindow.moveBy(50, 50)
}

function resizeToWindow(){
    openedWindow.resizeTo(-100, -100)
}

function resizeByWindow(){
    openedWindow.resizeBy(-50, -50)
}


///////////////////////////////////////////

// 1. setTimeout(cb, time)  : wait time then execute

// a. using cb function
// function cb() {
//     console.log("welcome angular track"); 
// }

// window.setTimeout(cb, 2000);


// b. on the fly (anonymous function)
// window.setTimeout(function () {
//     console.log("welcome angular track"); 
// }, 2000);


// window is optional
// setTimeout(function () {
//     console.log("welcome angular track"); 
// }, 2000);


// 2. setInterval(cb, time): every time , do cb
// var interval;
// function start(i) {
//     interval = window.setInterval(function (){
//         console.log(i++);
//     }, 1000);
// }


// function stop() {
//     setTimeout(function(){
//         clearInterval(interval);    
//         start(6)
//     }, 5000);
// }

// start(1);
// stop();

// var interval = window.setInterval(function (){
//     console.log(i++);
// }, 1000);


///////////////////////////////////
// // console.log(location.reload());
// console.log(location);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.search);
// console.log(location.protocol);
// console.log(location.origin);
// console.log(location.pathname);

// location.assign("https://www.linkedin.com/in/abdalmonem-anwar-73710a1ba/");

// location.replace("https://www.linkedin.com/in/abdalmonem-anwar-73710a1ba/");

///////////////////////////////////

// console.log(history);
// console.log(history.length);

///////////////////////////////////////////

// console.log(navigator);
// console.log(navigator.geolocation);

// function successCallback(e){
//     console.log(e.coords.latitude)
//     console.log(e.coords.longitude)
// }

// function errorCallback(e){
//     console.log(e.message)
// }

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// function successCallback(geolocationPosition){
//     console.log(geolocationPosition.coords.latitude)
//     console.log(geolocationPosition.coords.longitude)
// }

// function errorCallback(geolocationPositionError){
//     console.log(geolocationPositionError.message)
// }

// navigator.geolocation.getCurrentPosition(
//     function (geolocationPosition){
//         console.log(geolocationPosition.coords.latitude)
//         console.log(geolocationPosition.coords.longitude)
//     },
//     function (geolocationPositionError){
//         console.log(geolocationPositionError.code)
//         console.log(geolocationPositionError.message)
//     }
// );

////////////////////////////////////////////////////
        /// remove event listener

// var btn = document.getElementById("_btn");
// console.log(btn);

// function buyWithSale(){
//     console.log("you got 25% sale on this product");
// }

// function buy(){
//     console.log("you got 5% sale on this product");
// }

// btn.addEventListener('click', buyWithSale)


// setTimeout(() => {
//     btn.removeEventListener('click', buyWithSale)
//     btn.addEventListener('click', buy)
// }, 5000);

///////////////////////////////////////////////////
            /// propagation

// function first(e){
//     e.stopPropagation();
//     console.log("first");
// }

// function second(e){
//     e.stopPropagation();
//     console.log("second");
// }

// function third(e){
//     e.stopPropagation();
//     console.log("third");
// }

// function myBody (){
//     console.log("body");
// }

// function fourth(e){
//     e.stopPropagation();
//     console.log("fourth");
// }

// function fifth(e){
//     e.stopPropagation();
//     console.log("fifth");
// }

// function seventh(e){
//     e.stopPropagation();
//     console.log("seventh");
// }

////////////////////////////////////////////////            /// Cookies

// document.cookie = "username=men3m";
// document.cookie = "password=12345";
// document.cookie = "track=Angular";
// document.cookie = "Provider=ITI";

// var person = {
//     fname: "ali"
// }

// person.color = "red";

// person.fname = "mona";
// console.log(person);

// document.cookie = "username=hazem";

// console.log(document.cookie);

/////////////////////////////
    // date

// var date = new Date();
// console.log(date);

// console.log(date.getDate());
// console.log(date.getMonth());
/*
jan: 0

dec: 11
*/
// console.log(date.getDay());
/*
sun: 0
mon: 1

sat: 6
*/
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());


// date.setDate(date.getDate() + 3)
// console.log(date);

// var timeInMS = date.getTime() + (5 * 24 * 60 * 60 * 1000);

// date.setTime(timeInMS);

// console.log(date);



// 2. persistent cookie

// var date = new Date();

// var today = date.getDate();

// var expirationDate = new Date(date.setDate(today + 5));
// console.log(expirationDate);
// document.cookie = "branch=menofia;expires="+expirationDate;

// set an expiration date to the cookie
// var expirationDate = new Date();
// console.log(expirationDate);
// expirationDate.setDate(expirationDate.getDate()+3);
// console.log(expirationDate);
// document.cookie = "age=22;expires="+expirationDate;


//////////////////////////////////////////////////////

                // deleting a cookie
var expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate()-1);
document.cookie = "branch=11;expires="+expirationDate;