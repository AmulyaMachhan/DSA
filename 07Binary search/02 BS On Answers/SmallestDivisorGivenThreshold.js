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