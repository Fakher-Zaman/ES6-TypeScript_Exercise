// Sets and Maps

let mySet = Object.create(null);
mySet.id = 1;       // 1/0
if (mySet.id) {
    console.log("id exists");
}
else {
    console.log("id does'nt exists");
}

let myMap = Object.create(null);
myMap.name = "Fakhar Zaman";
let val = myMap.name;
console.log(val);

myMap[100] = "Hello";
console.log(myMap["100"]);
let object1 = {};
let object2 = {};
myMap[object1] = "World!";
console.log(myMap[object1]);
console.log(object1.toString());
console.log(object2.toString());