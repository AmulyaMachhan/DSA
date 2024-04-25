//Problem Statement: 
//You are given an array of integers 'arr' and an integer i.e. a threshold value 'limit'. 
//Your task is to find the smallest positive integer divisor,
//such that upon dividing all the elements of the given array by it, 
//the sum of the division's result is less than or equal to the given threshold value.

//OPTIMAL APPROACH
function smallestDivisorGivenThreshold_1(array , threshold){
    let n = array.length;
    let low =0 ;
    let high = Math.max.apply(null , array);
    
    while(low <= high){
        let mid = low + Math.floor((high - low) / 2);
        let sum = 0;
        for(let i = 0 ; i < n ; i++){
            sum += Math.ceil(array[i] / mid);
        }
        if(sum <= threshold){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return low;
}

console.log(smallestDivisorGivenThreshold_1([2,4,6,8,10] , 15));
console.log(smallestDivisorGivenThreshold_1([2,4,6,8,10] , 10));
console.log(smallestDivisorGivenThreshold_1([1,2,3,4,5] ,8));

//BRUTE FORCE APPROACH
function smallestDivisorGivenThreshold(array , threshold){
    let max = Math.max.apply(null ,array);

    for(let i = 1 ; i <= max ; i++){
        let val = 0;

        for(let j = 0 ; j < array.length ; j++){
            val += Math.ceil(array[j] / i)
        }
        if(val <= threshold){
            return i;
        }
    }

    return 0;
}

console.log(smallestDivisorGivenThreshold([2,4,6,8,10] , 15));
console.log(smallestDivisorGivenThreshold([2,4,6,8,10] , 10));
console.log(smallestDivisorGivenThreshold([1,2,3,4,5] ,8));