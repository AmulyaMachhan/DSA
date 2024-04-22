//The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x.
//The upper bound is the smallest index, ind, where arr[ind] > x.
//But if any such index is not found, the upper bound algorithm returns n i.e. size of the given array. The main difference between the lower and upper bound is in the condition. For the lower bound the condition was arr[ind] >= x and here, in the case of the upper bound, it is arr[ind] > x.
function upperBound(array , target){
    let n = array.length;
    let low = 0 ; high = n - 1;
    let ans = n - 1;

    while(low < high){
        let mid = Math.floor((low + high)/2);

        if(array[mid] < target){
            ans = mid;
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }

    return ans + 1;
}

console.log(upperBound([1,2,3,4,5,6,7,9,10], 8))

//RECURSIVE UPPER BOUND
function recursiveUpperBound(array , target  , low , high , ans){
    if(low > high){
        return ans;
    }

    let mid = Math.floor((low + high)/2);

    if(array[mid] < target){
        ans = mid + 1;
        return recursiveUpperBound(array , target , mid + 1 , high , ans);
    }else{
        return recursiveUpperBound(array ,target , low , mid - 1 , ans);
    }
}
 
console.log(recursiveUpperBound([1,2,3,4,5,6,7,9,10] , 8 , 0 , 8 , 9))