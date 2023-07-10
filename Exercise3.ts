// let keyword in for loops

for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

setTimeout(function () {
    console.log("Difference Between:");
}, 2000);

for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 3000);
}