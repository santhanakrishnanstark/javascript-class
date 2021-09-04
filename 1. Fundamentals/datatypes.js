// Datatypes

/**
 * 1. undefined
 * 2. number
 * 3. bigint
 * 4. boolean
 * 5. string
 * 6. symbol
 * 7. object
 * 8. function
 * 9. null
 */

// to identify the type of data using 'typeof' keyword

// 1. undefined
let myName;

console.log('Undefined myName: ', myName)

// 2. number
console.log('**** Number ***')

let n = 100;
console.log(typeof n)
console.log(100/0)
console.log('sting'/5)

console.log('**** Number end ***')

// bigint

let num = 10n;

console.log(typeof num)

// string 

let courseName = 'javascript';
console.log(typeof courseName)

// symbol

let sym = Symbol('hello');
let sym1 = Symbol('hello');
console.log(typeof sym)
console.log(sym == sym1)

// object
let user = {
    name: 'john',
    age: 30
}

console.log(typeof user)
console.log(user.name, user.age)

// function

console.log(typeof alert)

// null

let age = null;
console.log(typeof age)