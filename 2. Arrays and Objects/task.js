function generateCustomArray(num, value) {
    return Array(num).fill(value);
}

console.log(generateCustomArray(5, 'a'));
console.log(generateCustomArray(15, 'x'));


// reverse array

const array = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15];

let reverseArray = [];

for (let index = array.length-1; index >= 0; index--) {
    reverseArray.push(array[index]);
}

console.log(reverseArray)