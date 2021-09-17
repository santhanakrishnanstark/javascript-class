// class

// Javascript is an object oriented programming language.

// Defining a class

/**
 * 
 * class ClassName {
 *      // code
 * }
 * 
 */


class Person {
    constructor(firstName='Anonymous', lastName='', age='NA', city='NA') {
        console.log('person object created !')
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    get getCity() {
        return this.city;
    }

    set setCity(newCity) {
        this.city = newCity;
    }

    static basicSkills() {
        const skills = ['Walk', 'Run', 'Fight', 'Swim'];
        return skills;
    }
}

const john = new Person('John', 'Doe', 35, 'NewYork');  // john => object reference

const jane = new Person('Jane', 'Doe', 30);

const ken = new Person();

console.log(john); 
console.log(jane);
console.log(ken);

console.log('FullName: ', john.getFullName());


// getter & setter methods.


/**
 * 
 * get getCity() {}
 * 
 * set setCity(newCity){}
 * 
 */

john.setCity = 'London';

console.log('Get Johns city : ', john.getCity)


// static method - it is a common method for all the object reference.

/**
 * 
 * static basicSkills() {}
 * 
 */


console.log(Person.basicSkills())


// Inheritance

// by using inheritance we can acess all the properties & methods of the parent class.

class Student extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName); // it class super constructor or its parent constructor.
        console.log('Student is Created!')
    }

    speak() {
        console.log('I am a Student and I am child of Person Class')
    }
}

const alex = new Student('alex', 'A');

console.log('Alex info: ', alex.getFullName())

console.log(alex.speak())
console.log(Person.basicSkills())