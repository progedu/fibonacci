'use strict';
function fib(n){
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
const lingth=40;
for(let i=0;i<=lingth;i++){
    console.log(fib(i));
}