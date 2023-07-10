// Var Hoisting & Functional Scope
function greetPerson(name) {
    var greet;
    if (name == "Fakhar") {
        // var greet = "Hello! " + name;
        greet = "Hello! " + name;
    }
    else {
        // var greet = "Hi! there"
        greet = "Hi! there"
    }
    console.log(greet)
    // var greet;
}
greetPerson("Greet")