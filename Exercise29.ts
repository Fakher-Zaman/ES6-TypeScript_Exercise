// Symbol Iterator
// for..of --> iterator method --> symbol.iterator

let array = [1, 2, 3, 4, 5];
let string = "Hello World!";
let number = 20;
let object = {name: "Fakhar Zaman"};

console.log("For string -> " + typeof array[Symbol.iterator]);
console.log("For string -> " + typeof string[Symbol.iterator]);
console.log("For string -> " + typeof number[Symbol.iterator]);
console.log("For string -> " + typeof object[Symbol.iterator]);