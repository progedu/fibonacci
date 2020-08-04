'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
memo.set(2, 1);
function tfib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = tfib(n - 1) + tfib(n - 2) + tfib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(tfib(i));
}