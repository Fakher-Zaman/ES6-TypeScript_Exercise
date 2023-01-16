console.log("ModuleA Loaded");
console.log("ModuleA log 1");
// import { fname, lname } from "./ModuleB";
import { fname as f, lname as l, obj } from "./ModuleB";

obj.name = "Web Developer"
console.log(onj.name)

console.log("ModuleA log 2");
// By using alias of attributes:
// console.log(`First Name: ${fname} Last Name: ${lname}`);
console.log(`First Name: ${f} Last Name: ${l}`);