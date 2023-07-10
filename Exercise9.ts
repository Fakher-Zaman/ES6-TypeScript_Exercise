// Rest Operator

let displayColors = function (message, ...Colors) { // Rest Operator
    console.log(Colors);
    console.log(arguments.length);

    console.log(message);
    for (let i in Colors) {
        console.log(Colors[i]);
    }
}

let msg = "---> List of Colors: ";
displayColors(msg, 'Red');
displayColors(msg, 'Red', 'Yellow');
displayColors(msg, 'Red', 'Yellow', 'Green');