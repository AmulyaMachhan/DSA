function longestSubarrayWithGivenSum(array , target) {
    let sum =0 ; 
    let maxLen = 0
    let hashMap = new Map();

    for(let i = 0 ;  i<array.length ; i++){
        sum += array[i];
        if(sum == target){
            maxLen = Math.max(maxLen , i + 1);
        }

        let rem = sum - target;

        if(hashMap.has(rem)){
            let len = i - hashMap.get(rem);
            maxLen = Math.max(maxLen , len);
        }

        if(!hashMap.has(sum)){
            hashMap.set(sum , i);
        }
    }
    return maxLen;
}
console.log(longestSubarrayWithGivenSum([1,-2,0,0,2,1,1,1,0,4], 3))