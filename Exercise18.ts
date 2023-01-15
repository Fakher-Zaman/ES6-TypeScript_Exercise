// Class Body and Methods:
// 3 Types of Methods are here:

class Human {
    // Method # 1:
    constructor(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }

    // Method # 2:
    static staticMethod() {
        console.log("Static Method!");
    }

    // Method # 3:
    greetPerson() {
        console.log("Hello " + this.name);
    }
};

let h = new Human("Fakhar Zaman");
Human.staticMethod();
h.greetPerson();