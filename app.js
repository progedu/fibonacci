'use strict';
function fib(n){
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }
    const t0 = fib(n-1);
    const t1 = fib(n-2);
    const all = t0 + t1;
    return all;
}

const length = 40;
for(let i=0;i<length;i++){
    console.log(fib(i));
}
