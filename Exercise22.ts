// Sets in ES2015

let set = new Set();
let ob1 = {};
let ob2 = {};

set.add(1);
set.add(2);
set.add(3);
set.add(4);
// set.add(1);
set.add(ob1);
set.add(ob2);       // Object behaves as a uniquely so it's count in the size of set().
console.log("set size = " , set.size);

let newSet = new Set([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]);
console.log("newSet size = " , newSet.size)

let chainSet = new Set().add("Hello").add("World!");
console.log("chainSet size = " , chainSet.size);
console.log("newSet contains : " , newSet.has(5));
console.log("newSet delete : " , newSet.delete(5));
console.log("newSet size = " , newSet.size);