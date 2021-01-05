'use strict';

function fib(n){
    // 0の場合は0を返す
    if(n === 0){
        return 0;
    // 1の場合は1を返す
    }else if(n === 1){
        return 1;
    }
    // 再帰関数(自分自身を呼び出す)
    return fib(n-1) + fib(n-2);
}

const length = 40;
for(let i = 0; i<=length; i++){
    console.log(fib(i));
}