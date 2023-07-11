// Class Constructors

class Student {
    public fname: string;
    public lname: string;

    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }
};

// Student is equivalent to Student1 class
class Student1 {
    constructor(public fname: string, public lname: string) {

    }
}

const man = new Student("fakher", "zaman");
console.log(man);