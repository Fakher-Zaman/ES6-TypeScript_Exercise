// Destructuring in Array

let empData = ["Fakhar", "Zaman", "Male"];

// let [fname, lname, gender] = empData;
// let [, , gender] = empData;
let [fname, ...elements] = empData;

console.log(fname);
console.log(elements);
// console.log(lname);
// console.log(gender);