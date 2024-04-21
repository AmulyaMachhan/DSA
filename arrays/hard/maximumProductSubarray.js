//BRUTE FORCE APPROACH
function maximumProductSubarry(array){
    let maxProd = 1;
    for(let i = 0 ; i < array.length ; i++){
        let prod = 1;
        for(let j = i ; j < array.length ;j++){
            prod *= array[j]
            
            maxProd = Math.max(prod , maxProd)
        }
    }

    return maxProd;
}

console.log(maximumProductSubarry([1,2,3,4,5,0]));
console.log(maximumProductSubarry([1,2,-3,0,-4,-5]));