// forEach Loop

var numbers = [10, 20, 30, 40, 50, 60];
numbers.forEach(arrayFunction);
function arrayFunction(element, index, array) {
    console.log("arr[" + index + "] = " + element);
    console.log(array);
};

// let myMapping = new Map([["fname", "Fakhar"],
// ["lname", "Zaman"]]);
// myMapping.forEach(mapFunction);
// function mapFunction(value, key, callingMap) {
//     console.log(key + " " + value);
//     console.log(myMapping === callingMap);
// };

// let numbers = new Set([1, 2, 3, 4, 5, 7, 5, 4, 3, 2, 1]);
// numbers.forEach(setFunction);
// function setFunction(value, key, callingSet) {
//     console.log(key + " " + value);
//     console.log(numbers === callingSet);
// };