// PROBLEM STATEMENT
// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must be unique and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// APPROACH : 1
// FOR MINIMAL TIME COMPLEXITY 
function intersectionOfArrays(arr1 ,arr2){
    let m = arr2.length;
    let result = [];
    let set = new Set(arr1);
    for(let i = 0; i < m; i++){
        if(set.has(arr2[i])) if(!result.includes(arr2[i])) result.push(arr2[i]);
    }

    return result;
}

console.log(intersectionOfArrays([1,2,2,1], [2,2]));
console.log(intersectionOfArrays([4,9,5], [9,4,9,8,4]));

// APPROACH : 2
// For minimal space complexity
function intersectionOfArrays(arr1, arr2){
    let result = [];

    for(let i = 0; i< arr2.length; i++){
        if(arr1.includes(arr2[i])){
            if(!result.includes(arr2[i])){
                result.push(arr2[i]);
            }
        }
    }
    return result;
}

console.log(intersectionOfArrays([1,2,2,1], [2,2]));
console.log(intersectionOfArrays([4,9,5], [9,4,9,8,4]));
