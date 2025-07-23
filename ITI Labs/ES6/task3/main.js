
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const strTest = fruits.every(fruit => typeof fruit === 'string');
console.log('string Test :', strTest);

const StartA = fruits.some(fruit => fruit.startsWith('a'));
console.log('start with "a":', StartA);

const StartWithSOrB = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
console.log('start with b or s:', StartWithSOrB);

const NewArray = fruits.map(fruit => `I like ${fruit}`);
for (let index = 0; index < NewArray.length; index++) {
    console.log(NewArray[index]);

    
}