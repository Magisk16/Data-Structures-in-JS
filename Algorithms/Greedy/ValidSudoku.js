let arr = [ [".",".","4",".",".",".","6","3","."],
            [".",".",".",".",".",".",".",".","."],
            ["5","6",".",".",".",".",".","9","."],
            [".",".",".","1","6",".",".",".","."],
            ["4",".","3",".",".",".",".",".","1"],
            [".",".",".","7",".",".",".",".","."],
            [".",".",".","5",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."]]
        
let n = arr.length;
let isValid =(arr)=>{
    const row = {};
    const col = {};
    const box = {};
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            const num = arr[i][j];
            if(num !=="."){
            let subBoxIndex = Math.floor(i/3)*3+ Math.floor(j/3);
            console.log(`${i} ${j} ${subBoxIndex}`);
            if(row[`${i}-${num}`] || col[`${j}-${num}`]|| box[`${subBoxIndex}-${num}`]){
                return false;    
            }
            row[`${i}-${num}`] =true;
            col[`${j}-${num}`] =true;
            box[`${subBoxIndex}-${num}`] =true;
        }
    }
    }
    return true;
}
console.log(isValid(arr));