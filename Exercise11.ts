// Object Literals (Part-I)

let firstName = "Fakhar";
let lastName = "Zaman";

let person = {
    firstName,
    lastName
};

// Concept of Computed Property Names Asynchronous Programming
setTimeout(() => {
    console.log(person.firstName);
    console.log(person.lastName);
}, 2000);

function createPerson(firstName, lastName, age) {
    let fullName = firstName + " " + lastName;
    return {
        firstName,
        lastName,
        fullName,
        isSenior() {
            return age > 40;
        }
    };
}

let p = createPerson("Fakher", "Zaman", 22);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());