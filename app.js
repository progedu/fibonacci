/**
 * フィボナッチ数列を書き出すプログラム
 */
'use strict';
console.log(0);//0番目
console.log(1);//1番目

var hitotumae = 1;
var futatumae = 0;

var length =40;
for(let i=2; i <= length; i++){
    let value = hitotumae + futatumae;
    console.log(value);
    futatumae = hitotumae;
    hitotumae = value;
}

/* テキストはこれ
'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n){    
    if(memo.has(n)){
        return memo.get(n);
    }
    const value =  fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++){
   // console.log(i + ' ' + fib(i)); 
    console.log(fib(i));
}
//console.log(fib(0));
//console.log(fib(1));
//console.log(fib(2));
//console.log(fib(3));

*/