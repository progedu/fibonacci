'use strict';

const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n) {
    let a = memo.get(n); 
    if (a || a === 0) {
        return a;
    }
    let n1 =fib(n-1);
    let n2 = fib(n-2);
    a = n1 + n2;
    memo.set(n, a);
    return a;
}
const length = 40;


for(let i=0; i <= length; i++) {
    console.log(fib(i));
}
