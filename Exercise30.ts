// Iterable and Iterator

/*
Iterable {
    [symbol.Iterable]() : Iterator;
}
Iterator {
    next() : IResultObj;
}
IResultObj {
    value: any;
    done: bool;
}
*/

// User Defined Iterable
let Iterable = [1, 2, 3];

function createIterator(array) {
    let count = 0;
    return {
        next: function () {
            // By the use of ternary operator (if-else)
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
};

let myIterator = createIterator(Iterable);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());