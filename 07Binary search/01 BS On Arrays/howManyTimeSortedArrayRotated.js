function howManyTimeSortedArrayRotated(array){
    let low = 0 , high = array.length - 1;
    let min = Infinity;
    let minIdx = -1;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        //if the entire search space between the low and high indexes is sorted
        //this means the min is at the low pointer
        if(array[low] <= array[high]){
            if(array[low] <= min){
                min = array[low];
                minIdx = low;
            }
            break;
        }

        //if left half is sorted
        if(array[low] <= array[mid]){
            if(array[low] <= min){
                min = array[low];
                minIdx = low;
            }
            //eliminate the left half
            low = mid + 1;
        }
        //if right half is sorted
        else{
            if(array[mid] <= min){
                min = array[mid];
                minIdx = mid;
            }
            //eliminate the right half
            high = mid - 1;
        }
    }
    return minIdx;
}

console.log(howManyTimeSortedArrayRotated([4,5,6,7,0,1,2,3]));
console.log(howManyTimeSortedArrayRotated([4, 5, 1, 2, 3]));