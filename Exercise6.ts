// Arrow Function

var normalFunc = function () {
    return 10;
}
console.log(normalFunc())

const arrowFunc = (x, bonus) => (10 * (x + bonus));     // Arrow Function with 2 parameters | 10 * x + bonus is the body of the function | one line body
console.log(arrowFunc(5, 5))