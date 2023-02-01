let str1 = "XYZABCD";
let str2 = "ABCDEFX";
let n1 = str1.length;
let n2 = str2.length;
let dp =[];
let str="";
for(let i=0;i<=n1;i++){
    dp[i] = new Array(n2+1).fill(0);
}
for(let i=0;i<=n1;i++){
    for(let j=0;j<=n2;j++){
        if(i==0 || j==0){
            dp[i][j] =0; 
        }
        else if(str1[i-1] == str2[j-1]){
            str+=str1[i-1];
            dp[i][j] = 1+dp[i-1][j-1];
        }else{
            dp[i][j]= Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
}
console.log(dp[n1][n2]);
console.log(str);