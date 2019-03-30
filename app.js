'use strict';
const memo_fib = new Map();
memo_fib.set(0, 0);
memo_fib.set(1, 1);

const memo_trib = new Map();
memo_trib.set(0, 0);
memo_trib.set(1, 0);
memo_trib.set(2, 1);

function fib(n) {
  if (memo_fib.has(n)) {
    return memo_fib.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo_fib.set(n, value);
  return value;
}
function trib(n) {
  if (memo_trib.has(n)) {
    return memo_trib.get(n);
  }
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo_trib.set(n, value);
  return value;
}

const length = 40;

console.log("--------------------------");
console.log("Fibonacci number");
console.log("--------------------------");
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
console.log("\n-------------------------");
console.log("Tribonacci number");
console.log("--------------------------");
for (let i = 0; i <= length; i++) {
  console.log(trib(i));
}
