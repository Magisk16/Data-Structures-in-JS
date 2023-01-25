let arr=[
    [1,1,1,1],
    [1,1,1,1],
    [0,1,0,1],
    [1,1,1,1]
];
let n =arr.length;
let res =[];

let isSafe =(arr,i,j)=>{
    return (i>=0 && j>=0 && i<n && j<n && arr[i][j]==1);
}
let solveMaze =(arr)=>{
    for(let i=0;i<n;i++){
        res[i] = new Array(n);
        for(let j=0;j<n;j++){
            res[i][j]=0;
        }
    }
    if(solveMazeUtil(arr,0,0,res) == false){
        console.log("Path not found");
    }
    let str="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            str+=res[i][j]+" "
        }
        console.log(str);
        console.log("\n");
        str="";
    }
}
let solveMazeUtil =(arr, x,y,res)=>{
    if (x==n-1 && y==n-1 && arr[x][y]==1){
        res[x][y] =1;
        return true;
    }
    if(isSafe(arr,x,y) == true){
        if(res[x][y]==1) return false;
        res[x][y]=1;
        if(solveMazeUtil(arr,x+1,y,res)){
            return true;
        }
        if(solveMazeUtil(arr,x,y+1,res)){
            return true;
        }
        if(solveMazeUtil(arr,x,y-1,res)){
            return true;
        }
        if(solveMazeUtil(arr,x-1,y,res)){
            return true;
        }
        res[x][y]=0;x
        return false;
    }
    return false;
}
solveMaze(arr);


// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){

//     }
// }