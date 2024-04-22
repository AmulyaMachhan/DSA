function countOccurenceOfElement(array , target){
    let first = firstOccurence(array , target);
    if(first === -1) return 0;

    let last = lastOccurence(array , target);
    return last - first + 1;
}

function firstOccurence(array , target){
    let low = 0 , high = array.length - 1;
    let first = -1;
    while(low <= high){
        let mid = low + Math.floor((high - low)/ 2);
        if(array[mid] === target){
            first = mid;
            high = mid - 1;
        }else if(array[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }

    return first;
}

function lastOccurence(array , target){
    let low = 0 , high = array.length - 1;
    let last = -1;
    while(low <= high){
        let mid = low + Math.floor((high - low)/ 2);
        if(array[mid] === target){
            last = mid;
            low = mid + 1;
        }else if(array[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }

    return last;
}

console.log(countOccurenceOfElement([1,2,3,3,3,4,5,6], 3))