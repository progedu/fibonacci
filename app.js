'use strict';
/* function fibonacci(n) {
    // 0番目の値は無条件に0にしておこう。for文を嚙ますまでもない
    if (n === 0) {
        return 0
    }
    let array = [0, 1];
    for (let i = 2; i < n; i++) {
        array.push(array[i-1] + array[i-2]);
    }
    return array[n-1]
    console.log(fibonacci(100));
} */

function fib(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }


console.log(fib(40));