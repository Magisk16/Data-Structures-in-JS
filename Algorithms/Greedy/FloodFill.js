let arr=[
    [0,0,1,0,0],
    [0,0,1,1,0],
    [0,1,1,0,0],
    [0,1,0,1,0],
    [1,1,0,0,0],
];
let i=1,j=2;
let newVal=2;
let currVal=1;

let isValid = (arr,i,j)=>{
    if(i<arr.length && j<arr[0].length && i>=0 && j>=0 ){
        return true;
    }
    return false;
}

let fillAdjacent =(i,j, newVal,currVal)=>{
    let queue=[]
    let directions = [[0,-1],[-1,0], [0,1],[1,0]];
    queue.push([i,j]);
    while(queue.length>0){
        let m = queue[0][0];
        let n = queue[0][1];
        arr[m][n] = newVal;
        queue.shift();
        for(let k=0;k<directions.length;k++){
            let adjX = m+directions[k][0];
            let adjY = n+directions[k][1];   
            if(isValid(arr,adjX,adjY) && arr[adjX][adjY] == currVal){
                queue.push([adjX,adjY]);
            }
        }
    }
    return arr;
}
console.log(fillAdjacent(i,j,newVal,currVal));

