'use strict';
console.time('fib');
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n){
  if(memo.has(n)){
    return memo.get(n);
  }
  const v = fib(n - 1) + fib(n - 2);
  memo.set(n, v);
  return v;
}
let l = process.argv[2] || 10;
for(let i = 0; i <= l; i++){
  console.log(fib(i));
}
console.timeEnd('fib');