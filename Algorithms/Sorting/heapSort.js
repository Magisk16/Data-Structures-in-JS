let heapify =(arr,length,mid)=>{
    let largest = mid;
    let left = 2*mid+1;
    let right = left+1;
    if(left<length && arr[left]>arr[largest]){
        largest = left;
    }
    if(right<length && arr[right]>arr[largest]){
        largest =right;
    }
    if(largest!=mid){
        [arr[mid], arr[largest]] = [arr[largest], arr[mid]];
        heapify(arr,length,largest);
    }
    return arr;
}


let heapSort =(arr)=>{
    let length = arr.length;
    let mid = Math.floor(length/2-1);
    let k=length-1;

    while(mid>=0){
        heapify(arr,length,mid);
        mid--;
    }
    while(k>=0){
        [arr[0], arr[k]] = [arr[k],arr[0]];
        heapify(arr,k,0);
        k--;
    }
    return arr;
}
let arr=[6,5,3,1,8,7,2,4];
console.log(heapSort(arr));