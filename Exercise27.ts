// Weak Map

let weak_map = new WeakMap();
let map_obj = {};
weak_map.set(map_obj, "Hello World!");
console.log(weak_map.get(map_obj));
map_obj = null;