let arr=[4,2,0,3,2,5];
let leftMax=[];
let rightMax=[];
let lmax=arr[0]
for(let i=0;i<arr.length;i++){
    if(lmax<arr[i]){
        leftMax.push(arr[i]);
        lmax =arr[i];
    }else{
        leftMax.push(lmax);
    }
}
console.log(leftMax);

let rmax=arr[arr.length-1];
for(let i=arr.length-1;i>=0;i--){
    if(rmax<arr[i]){
        rightMax.unshift(arr[i]);
        rmax =arr[i];
    }else{
        rightMax.unshift(rmax);
    }
}
console.log(rightMax);
let calc=0;
let i=0;
for(let i=0;i<arr.length;i++){
    calc += (Math.min(leftMax[i],rightMax[i]))-arr[i]
}
console.log(calc);
