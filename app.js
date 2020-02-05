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



/*

'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } //else
    return fib(n - 1) + fib(n - 2)
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}


n=1 fib(1) = r1  =1

n=2 fib(2-1=1) = r1 + fib(2-2=0) = r0   =r1+r0  =1

n=3 fib(3-1=2) = [fib(2-1=1) = r1 + fib(2-2=0) = r0] + fib(3-2=1) = r1   =[r1+r0]+r1  =2

n=4 fib(4-1=3) = {fib(3-1=2) = [fib(2-1=1) = r1 + fib(2-2=0) = r0] + fib(3-2=1) = r1}
  + fib(4-2=2) = fib(2-1=1) = r1 + fib(2-2=0) = r0                     ={[r1+r0]+r1}+r1+r0  =3

...関数で関数を呼んでるので分解していって「式を増やして計算された解答の値を増やしていく」。

*/