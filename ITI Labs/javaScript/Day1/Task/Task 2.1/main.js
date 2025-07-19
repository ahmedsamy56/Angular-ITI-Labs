var message = String(prompt("Please enter your string:"));
var count = 0;
for (var i = 0; i < message.length; i++) {
    if(message[i] == 'e' ||message[i] === 'E') count++;
    
}

alert(`number of ‘e’  is ${count}`);
