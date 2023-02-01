let profit  =[1,2,5,6];
let weight = [2,3,4,5];
let m =8;
let n=4;
let dp =[];
for(let i=0;i<=n;i++){
    dp.push(new Array(m+1).fill(0));
}
let str="";
for(let i=0;i<=n;i++){
    for(let j=0;j<=m;j++){
        if(i==0){
            dp[i][j] =0;
        }else if( j==0){
            dp[i][j]= 0;
        }
        else if(j<i){
            dp[i][j] = dp[i-1][j];
        }else{
            let temp=dp[i-1][j-weight[i-1]]
            if(temp == undefined){
                 temp= -profit[i-1];
            }
            dp[i][j] = Math.max(dp[i-1][j], (temp+profit[i-1]));
        }
    }
}

dp.map((item)=> str+=item+'\n');
console.log(str.split(",").join(" "));

let max = dp[n][m];
let count=n;
let res=new Array(n).fill(0);
while(max!=0){
    if(dp[count].includes(max) && (!dp[count-1].includes(max))){
        res[count-1]=1;
        max-=profit[count-1];
    }
    count--;
}
console.log(res);