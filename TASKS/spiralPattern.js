// let mat1 = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11,12,13,14,15],
//     [16,17,18,19,20],
//     [21,22,23,24,25],
//     // [1,2,3,4],
//     // [5,6,7,8],
// ];
// let row=4;
// let col=4;
// let mat2=[];
// let str='';
// // for(let i=0;i<5;i++){
// //     for(let j=0;j<5;j++){
// //         str+=mat1[i][j]+" ";
// //     }
// //     console.log(str+" \n");
// //     str='';
// // }
// let l=0;
// let k=0;
// let lastrow = row;
// let lastcol = col;

// for(let i=l;i<=lastrow;i++){
//     str+=mat1[l][i]+" ";
// }
// k++;
// for(let i=k;i<=lastcol;i++){
//     str+=mat1[i][lastcol]+" ";
// }
// lastcol--;

// for(let i=lastcol;i>=l;i--){
//     str+=mat1[lastrow][i]+" ";
// }
// lastrow--;
// for(let i=lastrow;i>=k;i--){
//     str+=mat1[i][l]+" ";
// }
// l++;
// for(let i=l;i<=lastcol;i++){
//     str+=mat1[k][i]+" ";
// }
// k++;
// for(let i=k;i<=lastcol;i++){
//     str+=mat1[i][lastcol]+" ";
// }
// lastcol--;
// for(let i=lastcol;i>=l;i--){
//     str+=mat1[lastrow][i]+" ";
// }
// lastrow--;

// for(let i=l;i<=lastcol;i++){
//     str+=mat1[lastrow][i]+" ";
// }


// console.log(str);

let mat1 =[
    // [1, 2, 3, 4, 5],
    // [6, 7, 8, 9, 10],
    // [11,12,13,14,15],
    // [16,17,18,19,20],
    // [21,22,23,24,25],
        [1,2,3,4],
        [5,6,7,8],
];
let lastrow=1,lastcol=3,row=0,col=0;
let str='';
let i=0,j=0;
do{
    for(j=col;j<=lastcol;j++){
        str+=mat1[row][j]+" ";
    }
    row++;
    for(i=row;i<=lastrow;i++){
        str+=mat1[i][lastcol]+" ";
    }
    lastcol--;
    for(j=lastcol;j>=col;j--){
        str+=mat1[lastrow][j]+" ";
    }
    lastrow--;
    for(i=lastrow;i>=row;i--){
        str+=mat1[i][col]+" ";
    }
    col++;
    
}while(row<=lastrow && col<=lastcol);

let arr = str.split(' ');
console.log(arr);
// let res=[];
// while(arr.length){
//     res.push(arr.splice(0,row));
// }
// res.pop();
// console.log(res);

