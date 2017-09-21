'use strict';
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fib(n-1) +fib(n-2);
}

const length = 40;
for(let i=0; i<= length; i++){
  console.log( fib(i));
}

/**
 * Exponential-order
 * 40 loops , user    0m5.076s
 * 50 loops , user    12m27.312s
 */