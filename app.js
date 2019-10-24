'use strict';

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
 // 連想配列のMap。キーには順番を、値には答えを格納する。
 // 0番目と1番目の答えは予め定義されているので、これを格納。

function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
         // もし連想配列が nをキーとした答えを持つなら、その値を関数の値として返す。
    } else {
        const value = fib(n - 1) + fib(n - 2);
        memo.set(n, value);
        return value;
         // そうでない場合、再帰関数を計算し、それを連想配列に格納した後に返す。
    }
}


const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}