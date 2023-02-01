let dfs =(arr,i,j, str)=>{
    if(str.length>str2.length){
        str2 = str;
    }
    if(i>=0 && i<n && j>=0&& j<n ){
        let res1=0,res2=0,res3=0,res4=0;
        if(i-1>=0){
            if(arr[i-1][j]>arr[i][j]){
                res1= 1+dfs(arr,i-1,j,str+arr[i-1][j]);
            } 
        }
        if(i+1<n){
            if(arr[i+1][j]>arr[i][j]){
                res2 = 1+dfs(arr,i+1,j,str+arr[i+1][j]);
            } 
        }
        if(j-1>=0){
            if(arr[i][j-1]>arr[i][j]){
                res3 = 1+dfs(arr,i,j-1,str+arr[i][j-1]);
            } 
        } 
        if(j+1<n){
            if(arr[i][j+1]>arr[i][j]){
                res4 = 1+dfs(arr,i,j+1,str+arr[i][j+1]);
            } 
        }
        return Math.max(res1,res2,res3,res4);
    }else{
        return 0;
    }
}
let arr= [
    [1,2,3,4],
    [3,1,2,5],
    [9,7,4,6],
    [2,5,1,2]
];

let n =arr.length;
let countMax=0;
let str='';
let str2='';
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        let count= 1+dfs(arr,i,j,str+arr[i][j]);
        if(count>countMax){
            countMax = count;
        }
    }
}
console.log(str2);

console.log(countMax);