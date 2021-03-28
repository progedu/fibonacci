'use strict';
const memo = new Map();
//n=0,n=1は最初から決まってる
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function fib(n){
    if (memo.has(n)){
    return memo.get(n);
    }
    let value = fib(n-1) + fib(n-2) + fib(n-3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++){
    console.log( i + "のトリボナッチ数は" + fib(i) + "です。");
}