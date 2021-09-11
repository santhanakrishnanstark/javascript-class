// High order function

// these are the functions which take other function as a parameter.

/**
 * setting time
 * 1. setInterval
 * 2. setTimeout
 * 
 * Functional Programming
 * 
 * 1. forEach
 * 2. map
 * 3. filter
 * 4. reduce
 * 5. every
 * 6. some
 * 7. find 
 * 8. findIndex
 * 9. sort
 */

// setInterval => to do some activity repeatedly with some interval of time.

var myInterval = setInterval(() => {
    // console.log('test')
}, 1000);

// setTimeout => to do some activity after some point in time.

setTimeout(() => {
    clearInterval(myInterval);
}, 5000);


// functional programming

// 1. its just like a normal for loop, used to iterate the arrays.

// 2. map() --> it iterate an array element and modify the array elements.

const number = [1,2,3,4,5,6,7,8,9,10];

const squaredNumber = number.map((item, index) => {
    return item ** 2
});

console.log(squaredNumber)


// 3. filter() => to filter out the element based on condition.
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Mongo', 'D3', 'Angular', 'Vue']

const evenNumberArray = number.filter((num) => (num % 2 == 0) );
const skillsEndwithT = skills.filter((skill) => skill.endsWith('t'));


console.log(evenNumberArray)
console.log(skillsEndwithT)

// 4. reduce() => takes an array but return as a single value.

const sum = number.reduce((acc, cur) =>  acc + cur, 0)

console.log('Reduce to sum: ' , sum)

// 5. every() => check if all the elements is satisfied in an array.

const mixArray = [1, 2, 3, 'test', false, 4, 5, 6, 'Hello'];

const isNumberArray = number.every((num) => typeof num === 'number' );
console.log('Is Number Array: ', isNumberArray)

const isNumberArray2 = mixArray.every((num) => typeof num === 'number' );
console.log('Is Number Array2: ', isNumberArray2)


// 6. some() => check if any elements in an array is satisfy the condition.

const isHaveAtleast1Number = mixArray.some((num) => typeof num === 'number');
console.log('Is Having one number ? : ', isHaveAtleast1Number)


// 7. find() => return the first satisfied element in the array.

const ages = [24, 22, 25, 32, 35, 45, 29, 89, 18, 100, 110];

console.log(ages.find((age) => age < 25))

// 8. findIndex() => return the position of the first element is satisfied.

console.log(skills.findIndex((skill) => skill.startsWith('J')))


// 9. sort() => to sort element in ascending 0or descending order

console.log(skills.sort())

const sortedAges = ages.sort(function (a, b) {
    return a - b;
});

console.log(sortedAges)