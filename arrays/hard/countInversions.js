//BRUTE FORCE APPROACH
function countInversions(array){
    let count = 0;
    for(let i = 0 ; i < array.length ; i++){
        for(let j = i ; j < array.length ; j++){
            if(array[i] > array[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(countInversions([1,2,3,4,5]));
console.log(countInversions([5,4,3,2,1]));
console.log(countInversions([5,3,2,1,4]));