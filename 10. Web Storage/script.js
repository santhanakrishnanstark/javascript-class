/**
 * Web Storage
 * 
 * 1. session Storage
 * 2. local Storage
 * 
 * local storage is similar to session strorage except the data stored in local storage has no 
 * expiration time. 
 * 
 * Methods
 * 
 * localStorage     - to display the object
 * .clear()         - to remove all item in storage
 * .setItem()       - to store data in local storage, it store as key value pair
 * .getItem()       - to retrive the stored data using the key.
 * .removeItem()    - to remove particular item using key.
 * .key()           - to display a data, it takes index as parameter.
 * 
 */


// session Storage

// sessionStorage.setItem('welcomeMessage', 'Hello! This is WebStorage Class')

localStorage.setItem('welcomeMessage', 'Hello! This is WebStorage Class')

let welcomeMsg = localStorage.getItem('welcomeMessage');
console.log(welcomeMsg)

// localStorage.removeItem('welcomeMessage');


// storing a completed data structure in local storage. it accepts only string type

const skills = ['html', 'css', 'javascript', 'react'];

const jsonSkills = JSON.stringify(skills);
console.log(jsonSkills)

localStorage.setItem('skills', jsonSkills)

const persons = [{
    name: 'John',
    age: 35,
    city: 'NY'
}, {
    name: 'John Doe',
    age: 25,
    city: 'NY'
}, {
    name: 'Jane',
    age: 18,
    city: 'NY'
}]

localStorage.setItem('persons', JSON.stringify(persons))

// get 2nd persons name from local storage

let data = localStorage.getItem('persons');

let localData = JSON.parse(data);

console.log(localData[1].name)