function floorAndCeilInSortedArray(array , target){
    return [floor(array ,target) , ceil(array ,target)];
}

function floor(array , target){
    let n = array.length;
    let low = 0 ; high = n - 1;
    let ans = -1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        
        if(array[mid] <= target){
            ans = array[mid];
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return ans;
}

function ceil(array , target){
    let n = array.length;
    let low = 0 ; high = n - 1;
    let ans = Infinity;
    
    while(low <= high){
        let mid = Math.floor((low + high)/2);

        if(array[mid] >= target) {
            ans = array[mid];
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return ans;
}
console.log(floorAndCeilInSortedArray([3, 4, 4, 7, 8, 10] , 5))