// Arrays and Tuples

let strArr1: string[] = ['Hello', 'World!'];
let strArr2: Array<string> = ['Hello', 'World!']

let anyArr: any[] = ['Hello', 10, true];

let myTuple: [string, number, number] = ["Hi", 10, 20];
console.log(myTuple[0]);
console.log(myTuple[1]);
myTuple[2] = 100;
console.log(myTuple[2]);