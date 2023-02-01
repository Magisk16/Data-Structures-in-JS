let arr =[1,2,2,4];
let sum=5;
let dp =[];
for(let i=0;i<=arr.length;i++){
    dp[i] = new Array(sum).fill(0);
}
for(let i=0;i<=arr.length;i++){
    for(let j=0;j<=sum;j++){
        if(j==0){
            dp[i][j] ='T';
        }
        else if(i==0){
            dp[i][j]= 'F';
        }
        else if(arr[i-1]>j){
            dp[i][j] = dp[i-1][j];
        }else{
            dp[i][j] = (dp[i-1][j] && dp[i-1][j-arr[i-1]]);
        }
    }
}
console.log(dp[arr.length][sum]);