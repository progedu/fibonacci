'use strict';

/*
// 指数オーダー
function fib(n) {
	if (n === 0) {
		return 0;	// 0のときはここで終了
	} else if (n === 1) {
		return 1;	// 1のときはここで終了
	}
	return fib(n - 1) + fib(n - 2);	// 2以上はこの処理
}
*/

// 線形オーダー（memo化して処理回数を1回にする）
const memo = new Map();

memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
	//キーnが存在する場合（再帰で呼び出したとき）の処理
	if (memo.has(n)) {	// hasでキーの有無を確認
		return memo.get(n);
	}
	// キーnが存在しないときの処理
	const value = fib(n - 1) + fib(n - 2);
	memo.set(n, value);	// 計算結果を追加する
	return value;
}

const length = 500;

for (let i = 0; i <= length; i++) {
	console.log(fib(i));
}
