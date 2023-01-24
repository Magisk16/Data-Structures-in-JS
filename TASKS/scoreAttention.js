// let arr =[7,6,5,4,3,2,1];
// let arr =[1,2,3,4,5,6,7];
let arr=[5,1,2,6,3,4];
let n = arr.length;
let newArr=new Array(n).fill(1);

for(let i=0;i<arr.length;i++){
    if(arr[i+1]<arr[i]){
        newArr[i+1] = newArr[i]+1;
    }
}
console.log(newArr);
for(let i=newArr.length-1;i>=0;i--){
    if(arr[i-1]<arr[i]){
        if(newArr[i-1]<newArr[i]+1){
            newArr[i-1] = newArr[i]+1;
        }
    }
}
console.log(newArr);