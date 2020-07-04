'use strict';

function fibonacci(n) {
  var fiboMap = new Map();
  for (let i = 0; i <= n; i++) {
    if(i == 0){
      fiboMap.set(0, 0);
    }else if(i == 1){
      fiboMap.set(1, 1);
    }else{
      fiboMap.set(i, fiboMap.get(i-1) + fiboMap.get(i-2));
    }
  }
  return fiboMap.get(n);
}

for (let i = 0; i <= 40; i++) {
  console.log(fibonacci(i));
}
