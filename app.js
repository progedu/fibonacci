'use strict';

// 0のときは0を返す
function fibonacci(n) {
  if(n == 0){
    return 0;
  }else if(n == 1){
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

for (var i = 0; i <= 40; i++) {
  console.log(fibonacci(i));
}
