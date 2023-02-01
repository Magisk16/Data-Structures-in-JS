let arr =[1,3,6,7,9,4,10,5,6];
let n =arr.length;
let dp=new Array(n).fill(1);

for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        if(arr[i]>arr[j] && dp[i]<=dp[j]){
            dp[i] = 1+dp[j];
        }
    }
}
// let res = Math.max(...dp.map(item => item.y),0);
let res = dp.reduce((acc, value) => {
    return (acc = acc > value ? acc : value);
  }, 0);
console.log(res);

