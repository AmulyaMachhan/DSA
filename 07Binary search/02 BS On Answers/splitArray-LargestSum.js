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