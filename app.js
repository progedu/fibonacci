'use strict';
const memo = new Map();

memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}

const assert = require('assert');
assert.equal(trib(5), 4, '正解は4, 実際は' + trib(5) +'でした');
assert.equal(trib(10), 81, '正解は81, 実際は' + trib(10) +'でした');

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}