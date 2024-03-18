function longestSubarrayWithGivenSum(array , target){
    let maxlength = 0;
    for(let i = 0 ; i < array.length ; i++){
        let sum = 0
        for(let j = i ; j < array.length ; j++){
            sum += array[j];
            if(sum === target){
                maxlength = Math.max(maxlength , j -i + 1)
            }
        }
    }
    return maxlength;
}
console.log(longestSubarrayWithGivenSum([2,3,5],5));
console.log(longestSubarrayWithGivenSum([1,9,2,3,5],10));