'use strict';


const memo = new Map();  //連想配列　keyには順番を、valueの値には答えを格納する
//一度計算した結果を保存しておく方法をメモ化というので変数名を memo にしている
memo.set(0,0);   //０番目の値（答え）は０を格納
memo.set(1,0);   //１番目の値（答え）は１を格納
memo.set(2,1);

function trib(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = trib(n-1)+ trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
    }

const length = 40;
for(let i = 0; i <= length; i++){
    console.log(trib(i));
}
