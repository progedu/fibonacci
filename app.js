'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1)


function tori(n) {
   if(memo.has(n)) {
    return memo.get(n);
   }
   const value = tori(n-1) + tori(n-2)+tori(n-3) ;
   memo.set(n, value);
   return value;
}

const length = 40;

for (let i = 0 ;i <= length; i++){
console.log(tori(i));
	
}




