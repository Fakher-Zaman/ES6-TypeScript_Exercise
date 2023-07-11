// Iterating Object

let personalInfo = {
    fname: "Fakhar",
    lname: "Zaman",
    age: 22,
    edu: "BS-IT"
};

// for(let p of personalInfo) {
//     console.log(p);
// };

personalInfo[Symbol.iterator] = function () {
    let properties = Object.keys(personalInfo);
    let count = 0;
    let isDone = false;
    let next = () => {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: this[properties[count++]] };
    }
    return { next };
};

console.log(personalInfo);