'use strict';
function fib(n){
    if (n === 0){
        return 0;
    }
    else if (n === 1){
        return 1;
    }
    //最初のfib(0),fib(1)を定義しておけば、後は再帰するだけで勝手に計算してくれる
    return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 0;i<=length;i++){
    console.log(fib(i));
}