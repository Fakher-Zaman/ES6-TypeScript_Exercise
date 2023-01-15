// Class

class Person {
    greet() { }
};

let emp = new Person();
console.log(emp.greet === Person.prototype.greet)
console.log(typeof Person);

function empFunc() { };
empFunc();