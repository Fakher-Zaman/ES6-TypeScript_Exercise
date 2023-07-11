// Interfaces

interface Student {
    fname: string;
    lname: string;
    age?: number;   // age is optional
};

let student1: Student = {
    fname: "Fakher",
    lname: "Zaman",
    age: 22
};
console.log(student1);

let student2: Student = {
    fname: "Hammae",
    lname: "Asif",
};
console.log(student2);