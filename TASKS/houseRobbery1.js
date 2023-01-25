let houseRobber = (arr)=>{
let robber =[];
robber[0] = arr[0];
if(arr.length ==2) return Math.max(arr[0],arr[1]);
robber[1] = Math.max(arr[0],arr[1]);
for(let i=2;i<arr.length;i++){
    robber[i] = Math.max(robber[i-2]+arr[i] , robber[i-1]);
}
return robber
}
let arr = [1,2,7,2,1,9];
console.log(houseRobber(arr));
