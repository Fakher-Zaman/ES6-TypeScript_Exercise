// Maps in ES2015

let newMap = new Map();

newMap.set("fname", "Fakhar");
newMap.set("lname", "Zaman");
newMap.set("age", 22);

console.log(newMap.get("fname"));
console.log(newMap.get("lname"));
console.log(newMap.get("age"));
console.log("--------");

let objt1 = {};
let objt2 = {};

newMap.set(objt1, "Object 1");
newMap.set(objt2, "Object 2");

console.log(newMap.get(objt1));
console.log(newMap.get(objt2));
console.log(newMap.size);
console.log(newMap.delete(objt1));
console.log(newMap.has(objt1));
