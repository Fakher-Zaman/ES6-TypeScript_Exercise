// const keyword

// const num;  // Error because const take a value

const num = 10;

const obj = {
    name: "Fakhar",
    class: "BSIT"
}
// obj = {}    // Error because const keyword declare at once only

setTimeout(function () {
    console.log(obj.name);
}, 4000);

obj.name = 'Zaman';

setTimeout(function () {
    console.log(obj.class);
}, 2000);