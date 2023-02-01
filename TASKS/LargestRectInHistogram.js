let arr=[2,2,5,6,2,2];
let stack=[];
let maxArea=0;
for(let i=0;i<=arr.length;i++){
    let curr = i==arr.length ? 0 : arr[i];
    // console.log(stack.length);
    while(stack.length!=0 && curr <arr[stack.at(-1)]){
        let top = stack.pop();
        let width =stack.length==0 ? i : i - (stack.at(-1))-1; 
        let area = arr[top]*width;
        maxArea = Math.max(area,maxArea);
    }
    stack.push(i);
    console.log(`iteration ${i} `+stack+" "+maxArea);
}


console.log(maxArea);