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

//この関数fibの考え方　
//fib(0)=0 fib(1)=1 fib(2)=1 fib(3)=2 fib(4)=3
//fib(4)=fib(3)+fib(2)
//      ={fib(2)+fib(1)}+fib(2)
//      =2{fib(1)+fib(0)}+fib(1) = 3fib(1)+2fib(0) = 3