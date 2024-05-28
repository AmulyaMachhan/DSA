//PROBLEM STATEMENT
//Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:

// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

//BRUTE FORCE SOLUTION 
function continousSubArraySum(array , k){
    let result = [];
    let sum = 0;

    const cumulativeSum = function(index){
        let sum = 0;
        for(let i = 0 ; i <= index; i++) sum += array[i];
        return sum;
    }

    for(let i = 0 ; i < array.length ; i++){
        for(let j = i + 1 ; j < array.length ; j++){
            sum = cumulativeSum[j] - cumulativeSum[i] + array[i];
            if(sum % k === 0){
                return true;
            }
        }
    }
    return false;
}

console.log(continousSubArraySum([23,2,4,6,7] , 6));
console.log(continousSubArraySum([23,2,5,6,7] , 6));
console.log(continousSubArraySum([23,2,7,6,8] , 6));