var normalFunc = function(){
    return 10;
}
console.log(normalFunc())

const arrowFunc = (x, bonus) => 10 * x + bonus;
console.log(arrowFunc(5, 50))