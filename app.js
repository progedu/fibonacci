'use strict';
console.time('fib');
function fib(n){
  if(n === 0){
    return 0;
  }else if(n === 1){
    return 1;
  }
  return fib(n - 1)+ fib(n - 2);
}
let l = process.argv[2] || 10;
for(let i = 0; i <= l; i++){
  console.log(fib(i));
}
console.timeEnd('fib');