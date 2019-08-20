'use strict';
//メモ化でアルゴリズム改善_トリボナッチ数列
const memo = new Map();
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);

function fib(n){
    //key値の有無判定
    if (memo.has(n)){
        return memo.get(n);
    }
    //key値が無ければ計算して、Mapに値をSetする
    const value = fib(n - 1) + fib(n - 2) + + fib(n - 3);
    memo.set(n,value);
    return value;  
}
const length = 40;
for (let i = 0;i<=length;i++){
    console.log(fib(i));
}