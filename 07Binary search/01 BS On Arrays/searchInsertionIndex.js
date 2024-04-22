function searchInsertionIndex(array , target){
    let n = array.length;
    let low = 0 ; high = n - 1;
    let searchIdx = n;

    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(array[mid] >= target){
            searchIdx = mid;
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return searchIdx;
}

console.log(searchInsertionIndex([1,2,4,7] , 6 ));
console.log(searchInsertionIndex([1,2,4,7] , 2 ));