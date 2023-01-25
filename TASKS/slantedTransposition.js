// let str= "MYNAAMAGI";
// let rows=3;

// let res=new Array(rows).fill([]);
// let l=0;
// for(let i=0;i<str.length;i++){
//     let k=0;
//     let temp =i;
//     while(temp<rows+i){
//         console.log(k+" "+temp);
//     if(str[i]!=' ' || str[i] !=undefined){
//         res[k++][temp]=(str[temp]);
//     }else{ 
//         res[k++][temp]= "*"
//     }
//     temp++;
// }
// }
// console.log(res); 

let str ="Mynaa ma";
let rows=3;
let res="";
for(let i=0;i<rows;i++){
    let j =i;
    while(j<str.length){
        if(str[j]==' '){
            let a = j;
            while(a+rows<str.length){
                if(str[a+rows]!=' '){
                    res+='*';
                    break;
                }
                a+=rows;
            }    
        }else{
            res+=str[j];
        }
        j+=rows;
    }
    for(let l=0;l<=i && i<rows-1;l++) res+='*';
}
console.log(res);