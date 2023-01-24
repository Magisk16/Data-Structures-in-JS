let arr =[5,2,4,6,1,3];
let n = arr.length;

for(let i=0;i<n;i++){
    let min =i;
    for(let j=i+1;j<n;j++){
        if(arr[min]>arr[j]){
            min = j;
        }
    }
    [arr[i],arr[min]] = [arr[min],arr[i]];
}
console.log(arr);