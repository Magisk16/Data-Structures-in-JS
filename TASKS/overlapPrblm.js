let A1 = [0,0];
let A2 = [0,0];
let B1=[-1,-1];
let B2=[1,1];
let x=0,y=1;
let area1 = (A2[x]-A1[x])*(A2[y]-A1[y]);
let area2 = (B2[x]-B1[x])*(B2[y]-B1[y]);
let x_overlap = Math.min(A2[x],B2[x])-Math.max(A1[x],B1[x]);
let y_overlap = Math.min(A2[y],B2[y])-Math.max(A1[y],B1[y]);
console.log(x_overlap);
console.log(y_overlap);
let TotalArea=0;
if(x_overlap>0 && y_overlap>0){
    TotalArea = x_overlap*y_overlap;
}
console.log(area1+area2-TotalArea);
