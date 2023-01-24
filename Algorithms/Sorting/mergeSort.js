let merger =(leftArr, rightArr)=>{
    let sortedArr =[];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}
let mergeSort =(arr)=>{
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length-1);
    let left = mergeSort(arr.slice(0,mid));
    
    let right = mergeSort(arr.slice(mid));
    
    return merger(left,right);
}

let arr=[3,5,8,5,99,1];
console.log(mergeSort(arr));