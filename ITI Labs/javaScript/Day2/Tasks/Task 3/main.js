function sum(...arr){
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
      res += arr[i];
    }
   return res; 
}


function mul(...arr){
    var res = 1;
    for (var i = 0; i < arr.length; i++) {
      res *= arr[i];
    }
   return res; 
}

function div(...arr){
     if (arr.length === 0) return 0
    var res = arr[0];
    for (var i = 0; i < arr.length; i++) {
      res /= arr[i];
    }
   return res; 
}


function GetOperation(fun, op, ...arr) {
    var ans = arr.join(`${op}`);
    ans += ` = ${fun(...arr)}`;
    return ans;
}


var nums = [];
while (nums.length < 3) {
    const input = parseFloat(prompt(`Enter number ${nums.length + 1}:`));
    if (!isNaN(input)) nums.push(input);
}

document.writeln(`<h1 style="color:red;">Sum of the 3 values: ${GetOperation(sum, '+', ...nums)}</h1>`);
document.writeln(`<h1 style="color:red;">multiplication of the 3 values: ${GetOperation(mul, '*', ...nums)}</h1>`);
document.writeln(`<h1 style="color:red;">division of the 3 valuesof the 3 values: ${GetOperation(div, '/', ...nums)}</h1>`);