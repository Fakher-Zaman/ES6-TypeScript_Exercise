// Iterating Over Maps

let full_name = new Map([
    ["fname", "Fakhar"],
    ["lname", "Zaman"]
]);

// for (let entry of full_name.entries()) {
//     console.log(`${entry[0]} -> ${entry[1]}`)
// }
// Same task perform as:
for (let [key, value] of full_name.entries()) {
    console.log(`${key} -> ${value}`)
}
console.log("----------------");

for (let key of full_name.keys()) {
    console.log(key);
}
console.log("----------------");

for (let value of full_name.values()) {
    console.log(value);
}
console.log("----------------");