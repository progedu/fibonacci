"use strict";
// フィボナッチ数列関数
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}
// トリボナッチ数列関数
const tribMap = new Map();
tribMap.set(0, 0);
tribMap.set(1, 0);
tribMap.set(2, 1);
function trib(n) {
  if (tribMap.has(n)) {
    return tribMap.get(n);
  }
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  tribMap.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(trib(i));
}
