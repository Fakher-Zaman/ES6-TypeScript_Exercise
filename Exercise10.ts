// Spread Operator

let display = function (message, ...colors) {       // Rest Operator
    console.log(message);

    for (let i in colors) {
        console.log(colors[i]);
    }
}

let txt = "---> List of Colors:";

let colorArray = ['orange', 'banana', "apple"];
display(txt, ...colorArray);    // Spread Operator