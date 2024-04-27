//PROBLEM STATEMENT
//Given an integer array ‘A’ of size ‘N’ and an integer ‘K'. 
//Split the array ‘A’ into ‘K’ non-empty subarrays such that the largest sum of any subarray is minimized. 
//Your task is to return the minimized largest sum of the split.
//A subarray is a contiguous part of the array.

//OPTIMAL APPROACH
function splitArrayLargestSum_1(array , noOfSubarrays){
    let n = array.length;
    if(n < noOfSubarrays) return -1;

    array.sort((a,b) => a - b);

    let low = Math.max(...array);
    let high = array.reduce((acc , elem) => acc + elem , 0);

    while(low <= high){
        let mid = low + Math.floor((high - low) / 2);

        if(noOfSubarraysForGivenSum(array , n , mid) >  noOfSubarrays){
            low = mid + 1;
        }else{
            high = mid - 1;
        } 
    }
    return low;
}

console.log(splitArrayLargestSum_1([1,2,3,4,5] , 3));
console.log(splitArrayLargestSum_1([1,3,5] , 3));

//BRUTE FORCE APPROACH
function splitArrayLargestSum(array , noOfSubarrays){
    let n = array.length;
    if(array.length < noOfSubarrays) return -1;

    let minLargestSum = Math.max(...array);
    let maxLargestSum = array.reduce((acc , elem) => acc + elem , 0); 

    for(let sum = minLargestSum ; sum <= maxLargestSum ; sum++){
        if(noOfSubarraysForGivenSum(array , n , sum ) === noOfSubarrays){
            return sum;
        }
    }
    return minLargestSum;
}

function noOfSubarraysForGivenSum(array , n , sum ){
    let calculatedSum = 0;
    let countOfSubarrays = 1;
    for(let i = 0 ; i < n ; i++){
        if(calculatedSum + array[i] <= sum){
            calculatedSum += array[i];
        }else{
            countOfSubarrays++;
            calculatedSum = array[i];
        }
    }
    return countOfSubarrays;
}

console.log(splitArrayLargestSum([1,2,3,4,5] , 3));
console.log(splitArrayLargestSum([1,3,5] , 3));

//Time Complexity: O(N * (sum(arr[])-max(arr[])+1)), where N = size of the array, sum(arr[]) = sum of all array elements, max(arr[]) = maximum of all array elements.
//Reason: We are using a loop from max(arr[]) to sum(arr[]) to check all possible values of time. 
//Inside the loop, we are calling the noOfSubarraysForGivenSum() function for each number. 
//Now, inside the noOfSubarraysForGivenSum() function, we are using a loop that runs for N times.