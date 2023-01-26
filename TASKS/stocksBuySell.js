// let arr =[7,1,5,3,6,4];
let arr =[1,2,3,4,5]
// let arr =[7,6,4,3,1]
let arr1 = [...arr];
let arr2 = [...arr];
let decreasing =arr1.sort((a,b)=>b-a);
let increasing = arr2.sort((a,b)=>a-b);
let profit=0;
if(JSON.stringify(arr) == JSON.stringify(decreasing)){
    console.log('0');
}else{
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            profit+=(arr[i]-arr[i-1]);
        }
    }
    console.log(profit);

}   
// arr.sort((a,b)=>a-b);
// console.log(arr);
//     let max = arr[arr.length-1];
//     let min = arr[0];
//     let secMax =arr[arr.length-2];
//     let secMin = arr[1];
    
    
//     console.log(min);




    