// lexical this

var employee = {
    id: 578,
    name: "Fakhar",
    class: "BSIT",
    greet: function () {
        setTimeout(() => {
            console.log(this.id + " || " + this.name + " || " + this.class);
        }, 2000);
    }
};
employee.greet();