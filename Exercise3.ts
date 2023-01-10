// let keyword in for loops

for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000);
}
console.log("Difference Between:")
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000);
}