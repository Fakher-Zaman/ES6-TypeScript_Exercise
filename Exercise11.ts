// Object Literals (Part-I)

let firstName = "Fakhar";
let lastName = "Zaman";

let person = {
    firstName,
    lastName
};

// console.log(person.firstName);
// console.log(person.lastName);

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

let p = createPerson("Fakhar", "Zaman", 22);
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());