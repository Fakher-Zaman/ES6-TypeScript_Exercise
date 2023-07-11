// Arrays and Tuples

let strArr1: string[] = ['Hello', 'World!'];
let strArr2: Array<string> = ['Hello', 'World!']
console.log(strArr1);
console.log(strArr2);

let anyArr: any[] = ['Hello', 10, true];
console.log(anyArr);

let myTuple: [string, number, null] = ["Hi", 10, null];
console.log(myTuple[0]);
console.log(myTuple[1]);
// myTuple[2] = undefined;  // Have a error there
console.log(myTuple[2]);