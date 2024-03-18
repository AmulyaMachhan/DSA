//optimal approach 
//Two pointer approach(it only works when the sum and the array contains positive elements)
//Because if we use this approach then it prints wrong answers
function longestSubarrayWithGivenSum1(array , target){
    let maxlength = 0;
    let right = 0 ;
    let left = 0;
    let sum = array[0];
    while(right < array.length){
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while(left < right && sum > target){
            sum -= array[left];
            left++;
        }
        // if sum = k, update the maxLen i.e. answer
        if(sum === target){
            maxlength = Math.max(maxlength , right - left + 1)
        }
        // Move forward the right pointer
        right++;
        if(right <array.length){
            sum+= array[right];
        }
    }
    return maxlength;
}
console.log(longestSubarrayWithGivenSum1([-2,3,1],1));
console.log(longestSubarrayWithGivenSum1([1,-9,2,-3,-7],-8));

//Better Approach 
//Used Hashing
function longestSubarrayWithGivenSum2(array , target){
    let hashMap = new Map();
    let sum = 0;
    let maxLength = 0;
    for(let i=0 ; i<array.length ; i++){
        sum += array[i];
        if(sum == target){
            maxLength = Math.max(maxLength , i+1);
        }

        let rem = sum - target;
        if(hashMap.has(rem)){
            let len = i - hashMap.get(rem);
            maxLength = Math.max(maxLength , len);
        }

        if(!hashMap.has(sum)){
            hashMap.set(sum , i)
        }
    }
    return maxLength;
}
console.log(longestSubarrayWithGivenSum2([2,3,5],5));
console.log(longestSubarrayWithGivenSum2([1,9,2,3,5],10));
console.log(longestSubarrayWithGivenSum2([1,0,0,0,1,2,1,1,1,1,2,3,5],3));

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
console.log(longestSubarrayWithGivenSum([1,0,0,0,1,2,1,1,1,1,2,3,5],3));