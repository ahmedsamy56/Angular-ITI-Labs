
var nums = [];
while (nums.length < 5) {
    const input = parseFloat(prompt(`Enter number ${nums.length + 1}:`));
    if (!isNaN(input)) nums.push(input);
}

var asc = nums.sort(function(a, b) {return a - b;}); 

var desc = asc.slice().reverse();


document.writeln(`<h1 style="color:red;">u've entered the values of: <span style="color:black;">${nums.join(" , ")}</span></h1>`);
document.writeln(`<h1 style="color:red;">ur values after being sorted descending: <span style="color:black;">${desc.join(" , ")}</span></h1>`);
document.writeln(`<h1 style="color:red;">ur values after being sorted ascending: <span style="color:black;">${asc.join(" , ")}</span></h1>`);