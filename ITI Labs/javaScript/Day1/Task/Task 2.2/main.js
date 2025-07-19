var message = String(prompt("Please enter your string:"));


var result = confirm("do you want  case sensitivity ?");

if(!result){
    message = message.toLowerCase();
}

var rev = "";
for (var i = message.length - 1; i >= 0; i--) {
    rev += message[i];
}


if (message === rev) {
    alert("Yes palindrome");
} else {
    alert("No not palindrome");
}