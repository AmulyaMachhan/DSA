// PROBLEM STATEMENT 
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


// OPTIMAL APPROACH 
function containsDuplicate_1(array , k){
    let map = new Map();
    let j = 0;
    for(let i = 0; i < array.length; i++){
        if(i - j > k){
            map.delete(array[j]);
            j++;
        }

        if(map.has(array[i])){
            return true;
        }

        map.set(array[i])
    }
    return false;
}

console.log(containsDuplicate_1([1,2,3,1] , 3));
console.log(containsDuplicate_1([1,0,1,1] , 1));
console.log(containsDuplicate_1([1,2,3,1,2,3] , 2));

// BETTER APPROACH 
function containsDuplicate(array, k){
    let map = {};

    for(let i = 0; i < array.length; i++){
        if(array[i] in map){
            if((i - map[array[i]]) <= k){
                return true;
            }
        }
        map[array[i]] = i;
    }
    return false;
}

console.log(containsDuplicate([1,2,3,1] , 3));
console.log(containsDuplicate([1,0,1,1] , 1));
console.log(containsDuplicate([1,2,3,1,2,3] , 2));