function searchElementInRotatedArray(array , target){
    let low = 0 , high = array.length;
    
    while(low <= high){
        let mid = low + Math.floor((high - low)/ 2);
        
        if(array[mid] === target){
            return mid;
        }
        
        //to check if left half is sorted
        if(array[low] <= array[mid]){
            if(array[low] <= target && target >= array[mid]){
                //element exits
                high = mid - 1;
            }else{
                //element does not exist
                low = mid + 1;
            }
        }else{
            if(array[mid] <= target && target >= array[high]){
                //element exist 
                low = mid + 1;
            }else{
                //element does not exist
                high = mid - 1;
            }
        }
    }
    return -1;
}

console.log(searchElementInRotatedArray([4,5,6,7,0,1,2,3] , 0));
console.log(searchElementInRotatedArray([4,5,6,7,0,1,2] , 3));