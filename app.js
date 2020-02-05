'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 0);
memo.set(3, 1);
function ttr(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = ttr(n - 1) + ttr(n - 2) + ttr(n - 3) + ttr(n - 4);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(ttr(i));
}


