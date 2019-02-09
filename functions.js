function greeting(name="User") {
    return "Hello "+ name;
}

const greetingV2 = (name="User") => 'Hello '+name;

function sayHello(name){
    return function(age) {
        return `Hello ${name}, you are ${age} years old`;
    }
}

const sayHelloV2 = (name) => (age) => `Hello ${name}, you are ${age} years old.`;

console.log('v1:', greeting('John') );
console.log('v2:', greetingV2('John') );

console.log( sayHello('Amir')(30) );
console.log( sayHelloV2('Amir')(30) );