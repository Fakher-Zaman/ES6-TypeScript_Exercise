// let keyword
function greetHuman(name) {
    let greet;
    if (name == "Fakhar") {
        greet = "Hello! " + name;
    }
    else {
        greet = "Hi! there"
    }
    console.log(greet)
}
greetHuman("Fakhar")

var a = 1;
var b = 2;
if (a === 1) {
    var a = 10
    let b = 20
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)