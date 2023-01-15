// for of loop

let colors = ['Red', 'Blue', 'Green'];

for (let index in colors) {     // for in loop
    console.log(colors[index]);
}
console.log("------");
for (let color of colors) {     // for of loop
    console.log(color);
}
console.log("<---->");
let letters = "ABCDEFGH";
for (let letter of letters) {   // for of loop
    console.log(letter);
}