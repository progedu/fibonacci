'use strict';

// memo変数に順番ごとの値を格納する
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n){
    // すでにmemoに格納されている場合,その値を返す
    if(memo.has(n)){
        return memo.get(n);
    }

    // 再帰関数(自分自身を呼び出す)
    const value =  fib(n-1) + fib(n-2);
    // 計算結果を順番と共にmemoに格納する
    memo.set(n, value);

    return value;
}

const length = 100;
for(let i = 0; i<=length; i++){
    console.log(fib(i));
}