// Object Literals (Part-II)

let ln = "last-name";
let fn = {
    "first-name": "Fakhar",
    [ln]: "zaman"
};
console.log(fn["first-name"]);
console.log(fn["last-name"]);
console.log(fn);