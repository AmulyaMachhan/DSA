function lowerBound(array , target){
    let n = array.length;
    let low = 0 ; high = n - 1;
    let ans = -1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(array[mid] >= target) {
            ans = array[mid];

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
        ans = array[mid];
        return recursiveLowerBound(array ,target , low , mid - 1 , ans);
    }else{
        return recursiveLowerBound(array , target , mid + 1 , high , ans)
    }    
}

console.log(recursiveLowerBound([1,2,4,5,6,7,8,9] , 3 , 0 , 7 , -1));