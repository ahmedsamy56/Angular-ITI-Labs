function FindLetter(str, letter) {
    var ans = [];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            ans.push(i);
        }
    }

    return ans;
}

var str = prompt("enter a string:");
var letter = prompt("Enter a letter:")
var result = FindLetter(str, letter);

if (result.length > 0) {
    alert(result.join(" , "));
} else {
    alert("Not found");
}

console.log(result);