'use strict';
/*
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

 常に一つ一つ計算し直している
fib(4)
=fib(3)+fib(2)
=(fib(2)+fib(1))+fib(2)
=(fib(1)+fib(0))+fib(1)+(fib(1)+fib(0))
=1+0+1+1+0
=3 

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
*/

'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
