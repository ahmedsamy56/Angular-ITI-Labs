let a = 5;
let b = 10;
[c, d] = [b, a];
console.log('swap:', c, d); 

//----------------------------------------------------------------//



function getMinMax(...numbers) {
    return {
        minNum: Math.min(...numbers),
        maxNum: Math.max(...numbers)
    };
}

let arra = [72, 20, 15, 4, 9 , 88];
let res = getMinMax(...arra);
console.log('Min value:', res.minNum);
console.log('Max value:', res.maxNum);


//----------------------------------------------------------------//

var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let strTest = fruits.every(fruit => typeof fruit === 'string');
console.log('string Test :', strTest);

let StartA = fruits.some(fruit => fruit.startsWith('a'));
console.log('start with "a":', StartA);

let StartWithSOrB = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
console.log('start with b or s:', StartWithSOrB);

let NewArray = fruits.map(fruit => `I like ${fruit}`);
for (let i = 0; i < NewArray.length; i++) {
    console.log(NewArray[i]);

    
}


//----------------------------------------------------------------//


function filterNums(arr) {
    return arr.filter(num => num > 0);
}

let nums = [3, -1, -10, 7, -5, 8];
const positives = filterNums(nums);
console.log('Positive numbers:', positives);

//----------------------------------------------------------------//

function sumArr(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

let arr = [4 , 8, 15, 16, 23, 42];
let total = sumArr(arr);
console.log('Sum : ', total);



//----------------------------------------------------------------//


function capitalizeNames(arr) {
    return arr.map(name => name.charAt(0).toUpperCase()+ name.slice(1));
}

let names = ["ahmed", "sara", "ali", "mohamd"];
let capitalized = capitalizeNames(names);
console.log(capitalized);


//----------------------------------------------------------------//


function isLower(str) {
    return str === str.toLowerCase();
}

let testStr1 = "Test";
let testStr2 = "test";
console.log(`${testStr1} : ${isLower(testStr1)}`); 
console.log(`${testStr2} : ${isLower(testStr2)}`); 



//----------------------------------------------------------------//


let GreaterThanLen = (arr, len) => arr.filter(str => str.length > len);

let words = ["ahmed", "sara", "ali", "mohamd"];
let ans = GreaterThanLen(words, 3);
console.log(ans);
