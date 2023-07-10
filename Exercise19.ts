// Class Inheritance

class A {
    constructor() {
        console.log("class A Constructor!");
    }

    getID() {
        return 1;
    }
};

// Single Inheritance:
class B extends A {
    constructor() {
        super();
        console.log("Class B Constructor!");
    }

    getID() {
        return 5;
    }
};

// Multi-Level Inheritance:
class C extends B {
    constructor() {
        super();
        console.log("Class C Constructor!")
    }

    getID() {
        return super.getID();
    }
}

let obj1 = new C();
console.log(obj1.getID());