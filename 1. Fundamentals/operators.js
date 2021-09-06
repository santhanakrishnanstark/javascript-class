// operators

// Math: + - * / % **
// Comparison = < > <= >= == === != !=== 
// Logical && || !
// ?? Nullish operator
//? :  (conditional)
// pre inc/dec    ++i --i
// post inc/dec   i++  i--

console.log('** Arithmetic Operator **')

let a = 2, b = 2;
console.log(a+b)

// inc/dec
console.log('pre inc a value: '+ ++a)
console.log('pre dec a value: '+ --a)

console.log('post inc a value: '+ a++)
console.log(a)

// comparison
a = 2;
b = '2';
console.log(a === b);

console.log(null == undefined) // true

console.log(null === undefined) // false

// logical operator
// (exp) && (exp)
console.log('** Logical Ops **')

a = 5; b = 10;
console.log('using && ' , (a <= 4) && (b<=10) )

console.log('using || ' , (a <= 4) || (b<=10) )

console.log('using ! ' , !(a <= 4) )


// conditional operation  :   (exp) ? true : false
console.log('** Conditional **')

let age = 20;

let isEligible = (age < 18) ? false : true;

console.log('is Eligible : '+ isEligible)


// Nullish operator
console.log('** Nullish **')

let x = null;

let y = 'some value';

let result = ((x!=='') && (x !== undefined) && (x !== null)) ? x : y;

let result2 = x ?? y;

console.log('Result: ' + result)
console.log('Result2: ' + result2)