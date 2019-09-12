'use strict';
function trib(n, meme) {
    if (meme.has(n)) {
        return meme.get(n);
    }
    const value = trib(n - 1, meme) +
                  trib(n - 2, meme) +
                  trib(n - 3, meme);
    meme.set(n, value);
    return value
};

const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
const length = 40;
for (let i = 0; i < length; i++) {
    console.log(trib(i, memo));
}
