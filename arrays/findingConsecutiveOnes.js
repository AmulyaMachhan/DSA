function findingConsecutiveOnes(array){
    let max = 0;
    let count = 0;
    for(let i=0; i<array.length ; i++){
        if(array[i] === 1){
            count++;
        }else{
            count = 0
        }
        max = Math.max(count, max);
    }
    return max;
}
console.log(findingConsecutiveOnes([1,1,0,1,1,1]));
console.log(findingConsecutiveOnes([1,0,1,1,0,1]));
console.log(findingConsecutiveOnes([1,1,1,1,0,1,1,1,1]));
console.log(findingConsecutiveOnes([0,2,3,4,5,6]));