// PROBLEM STATEMENT
// Given an integer array nums and an integer k, return the number of good subarrays of nums.

// A good array is an array where the number of different integers in that array is exactly k.

// For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
// A subarray is a contiguous part of an array.
function subArraysWithKDistinctElements(array , k){
    let n = array.length;
    let countMap = new Map();

    let distinctElements = 0;
    let ans = 0 , temp = 0;
    let containsKDistinctElements = false;
    let left = 0;
    for(let right = 0 ; right < n ; right++){
        if(!countMap.has(array[right]) || countMap.get(array[right]) === 0) distinctElements++;

        countMap.set(array[right] , (countMap.get(array[right]) || 0) + 1);

        while(distinctElements > k){
            countMap.set(array[left] , countMap.get(array[left]) - 1);
            if(countMap.get(array[left]) <= 0){
                countMap.set(array[left], 0);
                distinctElements--;
            }
            left++;
            temp = left;
            containsKDistinctElements = true;
        }

        if(distinctElements == k){
            while(countMap.get(array[left]) > 0){
                countMap.set(array[left] , countMap.get(array[left]) - 1);
                left++;
            }
            if(containsKDistinctElements) ans += left - temp + 1;
            else ans += left + 1;
        }
    }
    return ans;
}

console.log(subArraysWithKDistinctElements([1,2,1,2,3] , 2));

function subarraysWithKDistinct(nums, k) {
    let count = 0;
    const countSubstrings = (windowSize) => windowSize * (windowSize + 1) / 2;
    const atMost = (maxDistinct) => {
        let left = 0, distinct = 0, freq = new Map();
        let windowCount = 0;
        for (let right = 0; right < nums.length; right++) {
            freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
            if (freq.get(nums[right]) === 1) {
                distinct++;
            }
            while (distinct > maxDistinct) {
                freq.set(nums[left], freq.get(nums[left]) - 1);
                if (freq.get(nums[left]) === 0) {
                    distinct--;
                    freq.delete(nums[left]);
                }
                left++;
            }
            if (distinct === maxDistinct) {
                windowCount += countSubstrings(right - left + 1);
            }
        }
        return windowCount;
    };

    return atMost(k) - atMost(k - 1);
}

console.log(subarraysWithKDistinct([1,2,1,2,3], 2))