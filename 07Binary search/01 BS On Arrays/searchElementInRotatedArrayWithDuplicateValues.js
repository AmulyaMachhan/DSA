function searchElementInRotatedArrayWithDuplicateValues(array ,target){
    let low = 0 , high = array.length;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        if(array[mid] === target){
            return true;
        }
        
        if(array[low] == array[mid] && array[mid] == array[high]){
            low = low + 1;
            high = high - 1;
            continue;
        }
        if(array[low] <= array[mid]){
            if(array[low] >= target && target < array[mid]){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }else{
            if(array[mid] >= target && target < array[high]){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
    }
    return false;
}

console.log(searchElementInRotatedArrayWithDuplicateValues(
    [7, 8, 1, 2, 3, 3, 3, 4, 5, 6] , 3
));
console.log(searchElementInRotatedArrayWithDuplicateValues(
    [7, 8, 1, 2, 3, 3, 3, 4, 5, 6] , 10
));
console.log(searchElementInRotatedArrayWithDuplicateValues(
    [4, 1, 2, 3, 3, 3, 4] , 4
));