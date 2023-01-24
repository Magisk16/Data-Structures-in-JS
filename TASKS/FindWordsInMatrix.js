const arr = [
    ['c','o','d','k','x','t'],
    ['g','t','i','n','g','p'],
    ['l','k','o','l','m','w'],
    ['g','o','d','k','a','t'],
    ['k','i','d','k','r','t'],
    ['y','e','t','k','t','t'],
 ];
 let charArr =['cod', 'dio','ram','kid','tod','yod'];
 let height = arr.length;
 let width = arr[0].length;
 let res ="";

 let findWord =(i,j,k,target)=>{
    res+=(arr[i][j]);
    
    if(i+1<height && arr[i+1][j]==charArr[k][target+1]){
        findWord(i+1,j,k,target+1);
    }
    else if(i-1>=0 && arr[i-1][j] == charArr[k][target+1]){
        findWord(i-1,j,k,target+1);
    }
    else if(j+1 < width && arr[i][j+1] == charArr[k][target+1]){
        findWord(i,j+1,k,target+1);
    }
    else if(j-1>=0 && arr[i][j-1] == charArr[k][target+1]){
        findWord(i,j-1,k,target+1);
    } 
 }
let check =(i,j)=>{
    for(let k=0;k<charArr.length;k++){
        if(charArr[k][0] == arr[i][j]){
            temp =k;
            // console.log(temp);
            return true;
        }
    }
    return false;
}
let temp =null;
 for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
        if(check(i,j)){
            res ="";
            findWord(i,j,temp,0);
            if(charArr.includes(res)){
                console.log(res);
            }
            temp=null;
        }
    }
 }