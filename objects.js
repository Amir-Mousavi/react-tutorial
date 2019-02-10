
const person = {
    age: 30,
    firstName: 'John',
    lastName: 'Smith',

    address: {
        city: 'Berlin',
        housNumber: 40,
        streetName: 'karlStrasse',
    }
};

const car = new Object();

car.name = 'some name';

const power = 'power';


car[power] = 200;

console.log('person v1', person);

console.log('car', car);

delete person.age;

console.log('person v2', person);

const { firstName, age, address: { streetName } } = person;

console.log('firstName', firstName);

console.log('streetName', streetName);

const keys = Object.keys(person);

console.log('keys', keys);

const advancedPerson = {
    ...person,

    jobTitle: 'developer',
};

console.log('advanced person:', advancedPerson);


