'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n-2) + fib(n-1);
}

const length = 40;
for (let i = 0; i <= length ; i++){
    console.log(i + " : " + fib(i));
}


