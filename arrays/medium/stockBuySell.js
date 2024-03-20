//OPTIMAL APPROACH
function stockBuySell(array){
    let maxProfit = 0;
    let minPrice = Infinity;
    for(let i = 0 ; i < array.length ; i++){
        minPrice = Math.min(minPrice , array[i]);
        maxProfit = Math.max(maxProfit , array[i] - minPrice);
    }
    return maxProfit;    
}
console.log(stockBuySell([7,1,5,6,2,3]));
console.log(stockBuySell([7,6,5,4,3,2]));

//BEST APPROACH
function stockBuySell_2(array){
    let maxProfit = 0;
    for(let i = 0 ; i < array.length ; i++){
        for(let j = i ; j < array.length ; j++){
            if(array[j] > array[i]){
                maxProfit = Math.max(maxProfit , array[j] - array[i]);
            }
        }
    }
    return maxProfit;
}
console.log(stockBuySell_2([7,1,5,6,2,3]));
console.log(stockBuySell_2([7,6,5,4,3,2]));