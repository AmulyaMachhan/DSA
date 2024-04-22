function upperBound(array , target){
    let n = array.length;
    let low = 0 ; high = n - 1;
    let ans = -1;

    while(low < high){
        let mid = Math.floor((low + high)/2);

        if(array[mid] <= target){
            ans = array[mid];
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }

    return ans;
}

console.log(upperBound([1,2,3,4,5,6,7,9,10], 8))