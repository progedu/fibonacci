'use strict';

const memo = new Map();
memo.set(0, 0);
memo.set(1, 0); // 変更：1番目の値が変わるため
memo.set(2, 1); // 追加：トリボナッチ整列は2番めまでは定義されている

function fib(n) {
	if(memo.has(n)) {
		return memo.get(n);
	}
	const value = fib(n - 1) + fib(n - 2) + fib(n - 3); // 追加：3つ前の値の計算
	memo.set(n, value);
	return value;
}
const length = 20;
for (let i = 0; i <= length; i++) {
	console.log(fib(i));
}
