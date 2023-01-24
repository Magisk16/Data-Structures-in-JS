let str = "ABC";
let row =1;
let output="";
let step = (2*row)-2;
if(row==1){
    for(let k=0;k<str.length;k++){
        output+=str[k];
    }
}else{
for(let i=0;i<row;i++){
    for(let j=i;j<str.length;j+=step){
        output+=str[j]+"";
        if(i!=0 && i!=row-1 && j+step-(2*i)<str.length){
            output+=str[j+step-(2*i)]+"";
        }
    }
    }
}

console.log(output);