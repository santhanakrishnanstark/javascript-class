// Objects

// objects have properties and properties have values.   
// object is stored as key value pair.  eg { key: value }

// creating an empty object

let person = {}

console.log(person)

person = {
    name: 'John',
    age: 35,
    city: 'NY'
}

console.log(person)
console.log('Person name: ', person.name);

person.skills = [
    'HTML',
    'CSS',
    'Javascript'
]

person.isMarried = true;

console.log(person)


// Accessing an object values

console.log('Person City: ', person.city)
console.log('Person City: ', person['city'])

console.log('person 2nd skill : ', person.skills[1])


// Creating Object Methods

const newPerson = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    country: 'India',
    skills: [
        'HTML',
        'CSS',
        'Javascript',
        'React'
    ],
    isMarried: false,
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log('New Persons Fullname: ', newPerson.getFullName())


// Object Methods

// Object.assign ==> to copy an object without modifying the original object

const copyPerson = Object.assign({}, newPerson);

console.log('Copy person: ', copyPerson)


// Object.keys ==> to get the keys of an object as array.

const keys = Object.keys(newPerson);
console.log('New person Key values : ' ,keys)

// Object.values - to get the values of an object

const values = Object.values(newPerson);
console.log('New persons values : ' ,values)

// Object.entries - to get the key value pair as an array

const entries = Object.entries(newPerson);
console.log('New persons entries : ' ,entries)

// Object.hasOwnProperty() - to check if a specific key is exist in an object or not.

console.log('check if the country key is in Person Object: ', person.hasOwnProperty('country'))