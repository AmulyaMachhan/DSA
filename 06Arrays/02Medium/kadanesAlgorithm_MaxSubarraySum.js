function maxSubarraySum(array){
    let sum = 0;
    let max = -Infinity;
    for(let i = 0 ; i < array.length ; i++ ){
        
        sum += array[i];
        if(sum > max){
            max = sum;
        }

        if(sum < 0){
            sum = 0;
        }
    }
    return max;
}
console.log(maxSubarraySum([1,2,3,4,5]));
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]));

//BRUTE FORCE APPROACH
function maxSubarraySum_1(array){
    let max = -Infinity
    for(let i = 0 ; i < array.length ; i++){
        for(let j = i ; j < array.length ; j++ ){
            let sum = 0;
            for(let k = i ; k <= j ; k++){
                sum += array[k]
            }
            max = Math.max(sum , max);
        }
    }
    return max;
}
console.log(maxSubarraySum_1([1,2,3,4,5]));
console.log(maxSubarraySum_1([-2,1,-3,4,-1,2,1,-5,4]));

//BETTER APPROACH
function maxSubarraySum_2(array){
    let max = -Infinity
    for(let i = 0 ; i < array.length ; i++){
        let sum = 0;
        for(let j = i ; j < array.length ; j++ ){
            
            sum += array[j];
            max = Math.max(sum , max);
        }
    }
    return max;
}
console.log(maxSubarraySum_2([1,2,3,4,5]));
console.log(maxSubarraySum_2([-2,1,-3,4,-1,2,1,-5,4]));