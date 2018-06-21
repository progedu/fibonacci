'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function torib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = torib(n - 3) + torib(n - 2) + torib(n - 1);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(torib(i));
}