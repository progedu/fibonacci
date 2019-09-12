'use strict';
/* generalize fibonacci to m-bonacci*/
function mfib(m, n, meme) {
    if (meme.has(n)){
        return meme.get(n);
    }
    var value = 0;
    for (let j = 1; j < m + 1; j++) {
        if (n >= j) {
            value += mfib(m, n - j, meme);
        }
    }
    meme.set(n, value);
    return value
};

const length = 40;
const fibnum = 6;
var memo = new Map();
for (let i = 0; i < fibnum; i++) {
    if (i < fibnum - 1) {
        memo.set(i, 0)  
    } else {
        memo.set(i, 1)
    }
}
for (let i = 0; i < length; i++) {
    console.log(mfib(fibnum, i, memo))
}

