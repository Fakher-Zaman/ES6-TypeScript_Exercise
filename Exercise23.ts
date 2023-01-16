console.log("---> Strong Sets");
let hasSet = new Set();
let key = {};
hasSet.add(key);
console.log(hasSet.size);
key = null;
console.log(hasSet.size);
key = [...hasSet][0];

console.log("---> Weak Sets");
let weak_set = new WeakSet();
let obj_key = {};
weak_set.add(obj_key);
console.log(weak_set.has(obj_key));
obj_key = null;
console.log(weak_set.has(obj_key));