'use strict';

function fib(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

const length = 40;
for (let i = 0; i < length; i++) {
    console.log(fib(i));
}