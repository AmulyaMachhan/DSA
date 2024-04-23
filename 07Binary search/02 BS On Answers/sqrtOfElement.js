//Optimal Approach(Using binary search): 
//We are going to use the Binary Search algorithm to optimize the approach.

//The primary objective of the Binary Search algorithm is to efficiently determine the appropriate half to eliminate, thereby reducing the search space by half. 
//It does this by determining a specific condition that ensures that the target is not present in that half.

//Now, we are not given any sorted array on which we can apply binary search. 
//But, if we observe closely, we can notice that our answer space i.e. [1, n] is sorted. 
//So, we will apply binary search on the answer space.
function sqrtofElement(n){
    let low = 0 , high = n;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        let val = mid * mid;
        if(val <= n){
            //Eliminate the left half
            low = mid + 1;
        }else{
            //Eliminate the right half
            high = mid - 1;
        }
    }

    return high;
}

console.log(sqrtofElement(36))
console.log(sqrtofElement(28))