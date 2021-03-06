'use strict';
// 自分が考えたやつ
/* function fib(n) {
    // 0番目の値は無条件に0。for文を嚙ますまでもない
    if (n === 0) {
        return 0
    }
    let array = [0, 1];
    for (let i = 2; i < n; i++) {
        array.push(array[i-1] + array[i-2]);
    }
    return array[n-1]
} */

// 教材の悪い例
/*function fib(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(40)); */

var data = new Map();
data.set(0, 0);
data.set(1, 1);
/**
 * @param {number} n 
 * @returns {number}
 */
function fib(n) {
    if ( data.has(n) ) {
        return data.get(n)
    }
    const value = fib(n-1)+fib(n-2);
    data.set(n, value);
    return value
}
console.log( fib(process.argv[2]) );