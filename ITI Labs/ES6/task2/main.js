
function getMinMax(...numbers) {
    return {
        minNum: Math.min(...numbers),
        maxNum: Math.max(...numbers)
    };
}

const arr = [72, 20, 15, 4, 9 , 88];
const res = getMinMax(...arr);
console.log('Min value:', result.minNum);
console.log('Max value:', result.maxNum);
