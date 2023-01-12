// Default Function Parameters

let percentBonus = () => 0.1;
let getValue = function (val1 = 8, val2 = 9 * percentBonus()) {
    console.log(val1, val2);
    console.log("length: " + arguments.length);
}
getValue();
getValue(10);
getValue(10, 20);
getValue(undefined, 30);
getValue(40, undefined);