function FizzBuzz(num) {
    var str = "";
    if(num % 3 == 0)
        str += "fizz"
    
    if(num % 5 == 0)
        str += str.length == 0 ? "buzz" : " buzz";

    return str.length == 0 ? "none" : str;
}

var num = 0;

while (num == 0) {
    var input = parseInt(prompt("Enter a number:"));
    if (!isNaN(input)) num = input;
}

var ans = FizzBuzz(num);

alert(ans);

console.log(FizzBuzz(num));