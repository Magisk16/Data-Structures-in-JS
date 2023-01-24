// const arr = [
//     ['c','o','d','k','x','t'],
//     ['g','t','i','n','g','p'],
//     ['l','k','o','l','m','w'],
//     ['g','r','d','k','a','t'],
//     ['k','o','d','k','r','t'],
//     ['y','o','d','z','t','t'],
//  ];
//  const str = 'cglgkyoodkrtta';

//  const containsWord = (arr, str) => {
//     if (arr.length === 0){
//        return false;
//     };
//     const height = arr.length;
//     const width = arr[0].length;
//     const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

//     const tryWord = (x, y, k) => {
//        if (arr[x][y] !== str[k]) return false;
//        if (k === str.length - 1) return true;
//        arr[x][y] = '*';
//        for (const [dx, dy] of dirs) {
//           const i = x + dx;
//           const j = y + dy;
//           if (i >= 0 && i < height && j >= 0 && j < width) {
//              if (tryWord(i, j, k + 1)) return true;
//           }
//        }
//        arr[x][y] = str[k];
//        return false;
//     };
//     for (let i = 0; i < height; i++) {
//        for (let j = 0; j < width; j++) {
//           if (tryWord(i, j, 0)) return true;
//        }
//     }
//     return false;
//  };
//  console.log(containsWord(arr, str));


const arr = [
    ['c','o','d','k','x','t'],
    ['g','t','i','n','g','p'],
    ['l','k','o','l','m','w'],
    ['g','r','a','k','a','b'],
    ['k','z','d','q','r','a'],
    ['y','o','d','z','t','t'],
 ];
//  const str = 'cglgkyoddaoingpwtak';
let str="tabt"
 let charArr = Object.assign([],str);


 let height = arr.length;
 let width = arr[0].length;

 let res =[];

 let findWord =(i,j,target)=>{
    res.push(arr[i][j]);
    if(res.length == charArr.length) return true;
    if(i+1<height && arr[i+1][j]==charArr[target]){
        findWord(i+1,j,target+1);
    }
    else if(i-1>=0 && arr[i-1][j] == charArr[target]){
        findWord(i-1,j,target+1);
    }
    else if(j+1 < width && arr[i][j+1] == charArr[target]){
        findWord(i,j+1,target+1);
    }
    else if(j-1>=0 && arr[i][j-1] == charArr[target]){
        findWord(i,j-1,target+1);
    }
    
 }

 for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
        if(arr[i][j] == charArr[0]){
            res=[];
            findWord(i,j,1);
            if(res.toString().split(",").join("") == str){
                console.log(str);
            }
        }
    }
 }
 

