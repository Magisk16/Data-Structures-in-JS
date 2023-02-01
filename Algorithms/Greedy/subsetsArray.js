// const arr = [1, 2, 3];
// const subsets = (arr) => {
  
//   if (arr.length === 0) {
//     return [[]];
//   }
//   const firstElement = arr[0];
//   const subsetsWithoutFirstElement = subsets(arr.slice(1));
//   console.log(subsetsWithoutFirstElement);
//   const withFirstElement = subsetsWithoutFirstElement.map((subset) => {
//     return [firstElement, ...subset];
//   });

//   return [...subsetsWithoutFirstElement, ...withFirstElement];
// };
// // subsets(arr);
// console.log(subsets(arr));

//Backtracking

let arr =[1,1,2,2];
let res =[];
let subset =[];
let dfs = (ind)=>{
  if(ind == arr.length){
    res.push(subset.slice(0));
    return;
  }
  subset.push(arr[ind]);
  dfs(ind+1);
  subset.pop();
  dfs(ind+1);
  return res;
}
dfs(0);
function isEqual(a,b){
  return a.every((val,ind) => val == b[ind]);
}
let result=[[]];

for(let i=0;i<res.length;i++){
  for(let j=i+1;j<res.length;j++){
  if(!(isEqual(res[i],res[j]))){
    result.push(res[i]);
  }else{
    result.pop();
  }
  break;
}
}
console.log(result);