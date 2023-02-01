// let arr =[186,419,83,408]
// let amt =6249;
// let sum=0;
// let count=0;
// arr.sort((a,b)=>a-b);
// console.log(arr);
// if(arr.length==1){
//     if(arr[0] == amt){
//         count+=1;
//     }else if(amt ==0){
//         count=0;
//     }
//     else if(amt!=0){
//         while(sum<amt && amt-sum>=arr[0]){
//             sum+=arr[0];
//             count +=1;
//         }if(amt==sum){
//             count = count;
//         }else{
//             count=-1;
//         }
//         // if(sum>amt){

//         // }
//     }else{
//         count =-1;
//     }
// }
    

// else{
// for(let i=arr.length-1;i>=0;i--){
//     while(sum<amt && amt-sum>=arr[i]){
//         sum+=arr[i];
//         count+=1;
//     }
//     if(amt == sum){
//         count =count;
//     }else{
//         count=-1;
//     }
// }
// }
// console.log(count);

let arr =[1,2,5]
let n = arr.length;
let amt =5;
let dp =[];
for(let i=0;i<=arr.length;i++){
    dp.push(new Array(amt+1).fill(0));
}

for(let i=0;i<=n;i++){
    for(let j=0;j<=amt;j++){
        if(i==0){
            dp[i][j] = Infinity;
        }else if(j==0){
            dp[i][j] = 0;
        }
        else if(arr[i-1]>j){
            dp[i][j] = dp[i-1][j];
        }else{
            dp[i][j] = Math.min(1+dp[i][j-arr[i-1]], dp[i-1][j]);
        }
    }
}
if(dp[n][amt] == Infinity){
    console.log(-1);
}else{
    console.log(dp);
console.log(dp[n][amt])
}
