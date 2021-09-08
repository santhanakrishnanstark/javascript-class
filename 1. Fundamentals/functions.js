// Functions

/**
 * function functionName() {
 *     statements
 * }
 * 
 * functionName();
 */

// Naming Conventions
// if it is single word - all smallcase
// if it is multiple word - except first word all other firstword is caps (camel case)
// if it is constant variable - all

// Types of function creations:
/**
 * 1. Declaration 
 * 2. expression
 * 3. Anonymous
 * 4. Arrow
 */


// Declaration Function

declarationFunction();

function declarationFunction() {
    console.log('Declaration Function')
}


// declaration with parameter

function square(num) {
    let sq = num * num;
    console.log(`Square of ${num}: ` + sq);
}

square(10);

// declaration with return type with param  or expression type
function multipleOfFive(num) {
    return num * 5;
}

let result = multipleOfFive(5) * 5;
console.log(result)


// infinite parameter

console.log('Infinite Parameter')

function getTotal() {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum = arguments[index] + sum; // eg: arguments[3]
    }

    return sum;
}

console.log('Total Sum: ' + getTotal(2, 4, 6, 8, 10, 14, 16));

console.log(getTotal(5, 5,4,3,2,4,5,6,6));


// Anonymous Function

// a function without name

const anonymousFun =  function (params) {
    console.log('Inside Anonymous Function')
}

anonymousFun();

// self Invoking function

(function () {
    console.log('Self Function')
})();


// Arrow Functions - ES5 javscript

function printName(name) {
    console.log(name)
}

// inline/single line arrow function

const cube = (n) => n*n*n;

console.log(cube(5));


// multiline arrow function

const printFullName = (fname, lname) => {
    return fname + ' ' + lname;
}

let fullName = printFullName('John', 'Doe');

console.log(fullName)


const addTotal = (...args) => {
    let sum = 0;
    args.forEach(function(num) {
        sum += num;
    })

    console.log(sum)
}

addTotal(1,2,3,4,5,6,7,8,9,10);