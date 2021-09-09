// Arrays   ---   [.....]
// to store multiple values with multiple datatype

// 1. creating arrays

// using constructor or []

const array = Array();
console.log(array)

const arr = [];
console.log(arr)

// create with value

const tech = ['HTML', 'Css', 'Javascript'];
console.log(tech)

// with diff datatype
const diffArray = [1, 'one', true, [1,2,3] ];
console.log( diffArray )

// using split()

let js = 'Javascript';
console.log(js.split(''));

let sentance = 'I-Love-Javascript';
const mySentanceArray = sentance.split('-');

console.log(mySentanceArray)

// 2. Accessing array elements

console.log('*** Accessing Array Element ***')
// accessing first element in the array
console.log('First item ' , diffArray[0])

// accessing last element

console.log('Last item ' , diffArray[diffArray.length - 1])

// access inner array last element

console.log('Inner Last item ' , diffArray[diffArray.length - 1][diffArray[diffArray.length - 1].length - 1] )


// 3. Modifying array elements

console.log('*** Modifying Array Elements ***')

diffArray[0] = 10;
console.log(diffArray)

let lastIndex = diffArray.length - 1;
diffArray[lastIndex] = 'new item';

console.log(diffArray)

// 4. Manipulate array elements

console.log('*** Manipulate array elements ***')

const streamOfDatas = [1, 5, 'test', true, 3.5, [5, 'hello', false], 100, 200];

/**
 * 1. indexOf
 * 2. join()
 * 3. slice()
 * 4. splice()
 * 5. toString
 * 6. lastIndexOf
 * 7. isArray
 * 8. fill
 * 9. push
 * 10. pop
 * 11. shift 
 * 12. unshift
 */

// indexOf() - find index of the particular item.

console.log('Index of 3.5: ' , streamOfDatas.indexOf(3.5));

// join()

console.log(mySentanceArray.join(' * '))

// slice - to cut out items from arrays

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice());
console.log(numbers.slice(1, 3));


// splice() - we can add or remove elements in an array

console.log(numbers.splice(0, 2, 10, 12, 15))
console.log(numbers)

// toString

const numList = [1, 2, 3, 4, 5, 6, 2, 8, 5, 5]

console.log(numList.toString())

// lastIndexOf - to find the last index of an element

console.log(numList.lastIndexOf(5));

// isArray - to check if the datatype is array or not

console.log(Array.isArray(numList))


// fill()

const fillArray = Array(10).fill('X');
console.log(fillArray)


// push - to add array element in the last
// pop - to remove element in the last

const numStack = [1, 2, 3, 4, 5];

numStack.push(6);
console.log(numStack)

numStack.pop();
console.log(numStack)

// unshift & shift to add or remove element in the front of an array.

numStack.unshift('Start');

console.log(numStack)

numStack.shift();

console.log(numStack)


// sort()

console.log(tech.sort())
