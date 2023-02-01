let n =5;
let dp =new Array(n);
dp[0]=dp[1]=1;

for(let i=2;i<=n;i++){
    dp[i]=0;
    for(let j=0;j<i;j++){
        dp[i] += dp[j]*dp[i-j-1];
    }
}
console.log(dp[dp.length-1]);

