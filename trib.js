'use strict';
console.time('trib');
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n){
  if(memo.has(n)){
    return memo.get(n);
  }
  const v = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo.set(n, v);
  return v;
}
let l = process.argv[2] || 10;
for(let i = 0; i <= l; i++){
  console.log(trib(i));
}
console.timeEnd('trib');