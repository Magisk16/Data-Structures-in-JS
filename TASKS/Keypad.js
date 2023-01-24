let arr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let inp = "14459";
let password = Array.from(inp).map(Number);
console.log(password);
let adj = new Map();
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        let temp=[];
        if(i-1>=0){
            temp.push(arr[i-1][j]);
        }
         if(i+1<arr.length){
            temp.push(arr[i+1][j]);
        }
        if(j-1>=0){
            temp.push(arr[i][j-1]);
        }
        if(j+1<arr.length){
            temp.push(arr[i][j+1]);
        }
        adj.set(arr[i][j],temp);
    }
}
console.log(adj);

let sec=1;
for(let i=1;i<password.length;i++){
    if(password[i-1] == password[i]){
        continue;
    }
    let values = adj.get(password[i]);
    console.log(values);
    if(values.includes(password[i-1])){
        sec+=1;
    }else{
        sec+=2;
    }
}
console.log(sec);