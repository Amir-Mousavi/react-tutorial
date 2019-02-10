
const names = [ 'John', 'Emma', 'Stan' ];

console.log('the first name: ', names[0]);

console.log('the length of array: ', names.length);

names.forEach( (name, index) => {
    console.log('The name in for each loop: ', name);
    console.log('The current index is: ', index);
} );

const persons = [
    {
        name: 'John',
        age: 25,
    },
    {
        name: 'Emma',
        age: 18,
    },
    {
        name: 'John',
        age: 30,
    },
];

const filteredList = persons.filter( person => person.age <= 25 );

console.log('filteredList', filteredList);

const ages = persons.map(person => person.age);

console.log('ages: ', ages);


const newPersonList = [
    ...persons,

    {
        name: 'Reza',
        age: 40,
    },
];

console.log('newPersonList', newPersonList);