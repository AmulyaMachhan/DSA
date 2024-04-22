//The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.
//The lower bound is the smallest index, ind, where arr[ind] >= x. 
//But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.

function lowerBound(array , target){
    let n = array.length;
    let low = 0 ; high = n - 1;
    let ans = n;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(array[mid] >= target) {
            ans = mid;

            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return ans;
}

console.log(lowerBound([1,2,4,5,6,7,8,9,10], 3));

//RECURSIVE APPROACH
function recursiveLowerBound(array , target , low , high , ans){
    if(low > high){
        return ans;
    }

    let mid = Math.floor((low + high)/2);
    if(array[mid] >= target){
        ans = mid;
        return recursiveLowerBound(array ,target , low , mid - 1 , ans);
    }else{
        return recursiveLowerBound(array , target , mid + 1 , high , ans)
    }    
}

console.log(recursiveLowerBound([1,2,4,5,6,7,8,9] , 3 , 0 , 7 , 7));