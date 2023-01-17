// Generators

/*
function* createGenerator() {
    yield 1;
    console.log("After 1st yield!");
    yield 2;
}

let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
*/

// Object Iteration through generators
let person_here = {
    fname: "Fakhar",
    lname: "Zaman"
};

person_here[Symbol.iterator] = function*() {
    let properties = Object.keys(person_here)
    for(let t of properties){
        yield this[t];
    }
};

for (let p of person_here) {
    console.log(p);
}