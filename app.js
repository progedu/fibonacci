'use strict';
function fib() {
    let array = [0, 1];
    const length = 1000;
    for (let i = 0; i <= length; i++) {
        array.push(array[i] + array[i + 1]);
    }
    return (array[length]);
}

console.log(fib());




