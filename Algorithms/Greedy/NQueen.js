function queenProblem(){
    let queen = [
        // [0,0,0,0,0],
        // [0,0,0,0,0],
        // [0,0,0,0,0],
        // [0,0,0,0,0],
        // [0,0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ];
    const n =queen.length;
if(solveQueens(queen,0)==false){
    console.log("Does not exist");
}   
print(queen);
}
function isSafe(queen,x,y){
    for(let i=0;i<y;i++){
        if(queen[x][i] == 'Q'){
            return false;
        }
    }
    //upper diagonal check
    for(let i=x,j=y;i>=0 && j>=0;i--,j--){
        if(queen[i][j]){
            return false;
        }
    }
    let n =queen.length
    //lower diagonal check
    for(let i=x,j=y; i<n &&j>=0;i++,j--){
        
        if(queen[i][j]){
            return false;
        }
    }
    return true;
}
function solveQueens(queen,y){
    let n =queen.length
    if(y>=n) return true;
    for(let i=0;i<n;i++){
        if(isSafe(queen,i,y)){
            queen[i][y] ='Q';
            if(solveQueens(queen,y+1)){
                return true;
            }
            queen[i][y] =0;
        }
    }
    return false;
}
function print(queen){
    let res='';
    let n =queen.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            res+=queen[i][j]+" ";
        }
        console.log(res);
        res='';
    }
}


queenProblem();