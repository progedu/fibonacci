'use strict';
/*
//フィボナッチ数列
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n){
    if(memo.has(n)){
        return memo.get(n);
    }

    const value = fib(n-1)+fib(n-2);
    memo.set(n,velue);
    return value;
}

const length=100;
for(let i=0;i<=length;i++){
    console.log(fib(i));
}
*/


//トリボナッチ数列
const memo = new Map();
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);

function trib(n){
    if(memo.has(n)){
        return memo.get(n);
    }

    const value = trib(n-3)+trib(n-2)+trib(n-1);
    memo.set(n,value);
    return value;
}

const length=100;
for(let i=0;i<=length;i++){
    console.log(trib(i));
}