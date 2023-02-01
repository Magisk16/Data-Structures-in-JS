let stockPrices = [[36,9],[17,93],[34,4],[30,11],[11,41],[53,36],[5,92],[81,92],[28,36],[3,45],[72,33],[64,1],[4,70],[16,73],[99,20],[49,33],[47,74],[83,91]];
let n = stockPrices.length;
stockPrices.sort((a,b)=>a[0]-b[0])
let count=1;
for(let i=2;i<n;i++){
if(((stockPrices[i][1]- stockPrices[i-1][1])/(stockPrices[i-1][0]-stockPrices[i-2][0]))!=(stockPrices[i-1][1]- stockPrices[i-2][1])/(stockPrices[i][0]-stockPrices[i-1][0])){
    count+=1;
}

    // x1 = stockPrices[i-1][0];
    // x2 = stockPrices[i][1];
    // y1 = stockPrices[i-1][1];
    // y2 = stockPrices[i][1];
    // let currentSolpe = slope(x1,x2,y1,y2);
    // if(currentSolpe ==prevSlope){
    //     continue;
    // }else{
    //     count+=1;
    //     prevSlope =currentSolpe;
    // }
    }

console.log(count);