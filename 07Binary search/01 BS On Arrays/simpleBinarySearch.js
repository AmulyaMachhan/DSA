//ITERATIVE APPROACH
function simpleBinarySearch(array , target){
    let n = array.length;
    let low = 0 ; 
    let high = n -1;

    while(low <= high){
        let mid = Math.floor((low + high)/2);

        if(target == array[mid]) return mid + 1;
        else if(target < array[mid]) high = mid - 1;
        else low = mid + 1;
    }

    return -1;
}

console.log(simpleBinarySearch([3, 4, 6, 7, 9, 12, 16, 17], 6));
console.log(simpleBinarySearch([3, 4, 6, 7, 9, 12, 16, 17], 0));

//RECURSIVE APPROACH
function simpleBinarySearch_1(array , target , low , high){
    if(low > high) return -1;
    
    let mid = Math.floor((low + high)/2);
    if(array[mid] === target) return mid + 1;
    else if(array[mid] > target) return simpleBinarySearch_1(array , target , low , mid - 1);
    return simpleBinarySearch_1(array , target , mid + 1 , high);
}
console.log(simpleBinarySearch_1([3, 4, 6, 7, 9, 12, 16, 17], 6 , 0 , 7));
console.log(simpleBinarySearch_1([3, 4, 6, 7, 9, 12, 16, 17], 0 , 0 , 7));