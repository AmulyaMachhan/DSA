//OPTIMAL APPROACH -1
//observational approach
function maximumProductSubarray(array){
    let suffix = 1, prefix = 1;
    let max= -Infinity;
    let n = array.length
    for(let i = 0 ; i < array.length ; i++){
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;

        prefix *= array[i];
        suffix *= array[n - i - 1];

        max = Math.max(max , Math.max(prefix , suffix));
    }

    return max;
}

console.log(maximumProductSubarray([1,2,3,4,5,0]));
console.log(maximumProductSubarray([1,2,-3,0,-4,-5]));
console.log(maximumProductSubarray([1,1,0, -3, 0 ,45, 0 ,23]));

//BRUTE FORCE APPROACH
function maximumProductSubarry(array){
    let maxProd = array[0];
    for(let i = 0 ; i < array.length - 1 ; i++){
        let prod = 1;
        for(let j = i ; j < array.length ;j++){
            maxProd = Math.max(prod , maxProd)
            
            prod *= array[j]
        }
        maxProd = Math.max(prod , maxProd)
    }

    return maxProd;
}

console.log(maximumProductSubarry([1,2,3,4,5,0]));
console.log(maximumProductSubarry([1,2,-3,0,-4,-5]));