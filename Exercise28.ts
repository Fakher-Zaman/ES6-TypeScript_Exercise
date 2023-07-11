// Symbols in JavaScript

let s1 = Symbol("First Symbol");
console.log(typeof (s1));
console.log(s1.toString());

let s2 = Symbol("2nd");
let s3 = Symbol("2nd");
console.log(s2 === s3);    // false! Because symbols in ES6 create a unique i'd

let s4 = Symbol.for('RegSymbol');
let s5 = Symbol.for('RegSymbol');
console.log(s4 === s5);     // true!

console.log(Symbol.keyFor(s4));     // RegSymbol

let first_name = Symbol("First Name");
let personality = {
    [first_name]: "Fakhar"
};
console.log(Object.getOwnPropertyNames(personality));  // []
console.log(Object.getOwnPropertySymbols(personality));