'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}