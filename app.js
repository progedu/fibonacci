"use strict";

// Map関数の作成。
const memo = new Map();
//n=2まで初期値をセット
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

/**
 *トリボナッチ数列
 * @param {Number} n トリボナッチ数列に渡す整数
 */

function trib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
  memo.set(n, value);
  return value;
}

const length = 50;
for (let i = 0; i <= length; i++) {
  console.log(i + "番目 " + trib(i));
}
