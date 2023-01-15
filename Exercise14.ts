// Destructuring in Objects

let empObject = {
    f_name: "Fakhar",
    l_name: "Zaman",
    gender: "Male"
};

let { f_name: f, l_name: l, gender: g } = empObject;

// console.log(f_name);
// console.log(l_name);
// console.log(gender);

console.log(f);
console.log(l);
console.log(g);