'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib (n){
     if (memo.has(n)){ //値があるか？
         return memo.get(n);//あったら返す
          } //そうじゃない場合は以下の計算式に
          const value= fib(n - 1) + fib(n - 2);

          memo.set(n,value);//nにvalue代入
          return value;
}
const length = 40;
for (let i = 0; i <= length; i++){


     console.log(fib(i));
}