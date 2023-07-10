// Destructuring in Objects

let empObject = {
    f_name: "Fakhar",
    l_name: "Zaman",
    gender: "Male",
    age: 22
};

let { f_name: f, l_name, gender: g, age } = empObject;

// console.log(f_name);
// console.log(l_name);
// console.log(gender);

console.log(g);
console.log(f);
console.log(l_name);
console.log(age);