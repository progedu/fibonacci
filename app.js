'use strict';
const memo = new Map();
//n=0,n=1は最初から決まってる
memo.set(0, 0);
memo.set(1, 1);
function fib(n){
    if (memo.has(n)){
    return memo.get(n);
    }
    let value = fib(n-1) + fib(n-2);
    memo.set(n, value);
    return value;
}
for (let i = 0; i <= 100; i++){
    console.log( i + "のフィボナッチ数は" + fib(i) + "です。");
}