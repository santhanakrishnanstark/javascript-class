// Destructuring and Spread

// Destructuring is a way to unpack arrays and objects and assign to a distinct variable.

// Destructuring Array.

const number = [1, 2, 3]

let [numOne, numTwo, numThree] = number; 

console.log(number)
console.log(numTwo, numThree)

const fullStack = [ ['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDb'] ];

const [frontEnd, backEnd] = fullStack;  // old:  let frontEnd = fullStack[0]

console.log(frontEnd)  
console.log(backEnd)

const num = [2,3,4,5,6,7,8,9,10];

let [num1, ,num3] = num;
console.log('Omit Array element: ', num1, num3)

// Spread or Rest Operator
console.log('****Spread or Rest operator****')

let [n1, n2, n3, ...rest] = num;

console.log(n1)
console.log(n2)
console.log(n3)
console.log(rest)

// copy an array to new array using spread operator

const nums = [1,2,3,4,5,6,7,8,9,10];

//2 copy method

const copyNumArray0 = nums.slice();
const copyNumArray = [...nums];

console.log(copyNumArray0)
console.log(copyNumArray)


// Object Destructuring 

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    country: 'USA',
    job: 'Developer',
    skills: [
        'HTML',
        'CSS',
        'JS',
        'React'
    ],
    language: ['English', 'French', 'Tamil']
}

const person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    country: 'UK',
    job: 'Designer',
    skills: [
        'HTML',
        'CSS',
        'JS'
    ],
    language: ['English', 'French']
}

const { firstName, lastName, age, country } = person;

console.log(`Hi am ${person.firstName + person.lastName}, My Age is ${person.age} and I live in ${person.country} `)

console.log(`Hi am ${firstName +' '+ lastName}, My Age is ${age} and I live in ${country} `)


// destructuring while passing parameters.

function getPersonInfo({ firstName, lastName, age, country }) {
    const info = `Hi am ${firstName +' '+ lastName}, My Age is ${age} and I live in ${country}`;

    return info;
}

console.log(getPersonInfo(person2));
console.log(getPersonInfo(person));


// to copy an object using spread operator.

const user = {
    name: 'Alex',
    title: 'Programmer',
    country: 'Finland'
}

const copiedUser = Object.assign({}, user);
console.log('Copy user using Object assign: ', copiedUser)

const copiedUser2 = {...user};
console.log('Copy object using Spread: ', copiedUser2)


// spread operator using array function

sumAllNumbers = (...arguments) => {
    console.log(arguments)
}

sumAllNumbers(1,2,3,4,5);