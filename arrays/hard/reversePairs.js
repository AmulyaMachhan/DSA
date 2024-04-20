function reversePairs(array){
    let count = 0 ;
    for(let i = 0 ; i < array.length ; i++){
        for(let j = i + 1 ; j < array.length ;j++){
            if(array[i] > 2 * array[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(reversePairs([1,3,2,3,1]));
console.log(reversePairs([3,2,1,4]));