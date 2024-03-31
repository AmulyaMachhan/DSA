//Optimal approach 
//Using a hashMap
function countSubarraySumEqualToK_4(array , target){
    let count = 0 ;
    let size = array.length - 1;
    let hashMap = {};
    let sum = 0;

    for(let i = 0 ; i <=size ; i++){
        sum += array[i];

        if(sum == target){
            count++;
        }

        let rem = target - sum;
        if(hashMap[rem]){
            count++;
        }

        if(!hashMap[sum]){
            hashMap[sum] = i;
        }
    }
    return count;
}
console.log(countSubarraySumEqualToK_4([3, 1, 2, 4], 6));
console.log(countSubarraySumEqualToK_4([1], 1));
console.log(countSubarraySumEqualToK_4([1], 0));
console.log(countSubarraySumEqualToK_4([-1,1,-1], 0));
console.log(countSubarraySumEqualToK_4([-1,-1,-1], -3));// Here this method fails because it cannot count sum for negative values
console.log("\n")

//Only if all the elements in the array are positive 
function countSubarraySumEqualToK(array, target) {
    let size = array.length - 1;
    let left = 0, right = 0;
    let sum = array[0];
    let count = 0;

    while (right <= size && left <= right) {
        if (sum === target) {
            count++;
        }

        if (sum <= target) {
            right++;
            if (right < size) {
                sum += array[right];
            }
        } else {
            sum -= array[left];
            left++;
        }
    }

    return count;
}

console.log(countSubarraySumEqualToK([3, 1, 2, 4], 6));
console.log(countSubarraySumEqualToK([1], 1));
console.log(countSubarraySumEqualToK([1], 0));
console.log(countSubarraySumEqualToK([-1,1,-1], 0));
console.log(countSubarraySumEqualToK([-1,-1,-1], -3));// Here this method fails because it cannot count sum for negative values
console.log("\n")

//Better Approach
function countSubarraySumEqualToK_1(array , target){
    let count = 0; 
    let size = array.length - 1;

    for(let i = 0 ; i <=size ; i++){
        let sum = 0;
        for(let j = i ; j <= size ; j++){
            sum += array[j];

            if(sum == target ){
                count++;
            }
        }
    }
    return count
}
console.log(countSubarraySumEqualToK_1([3, 1, 2, 4], 6));
console.log(countSubarraySumEqualToK_1([1], 1));
console.log(countSubarraySumEqualToK_1([1], 0));

//Brute Force Approach
function countSubarraySumEqualToK_2(array , target){
    let count = 0 ;
    let size = array.length - 1;
    
    for(let i=0; i <= size ; i++){
        for(let j=0 ; j <= size ; j++){
            let sum = 0;
            for(let k=i ; k <=j ; k++){
                sum += array[k]
            }
            
            if(sum == target){
                count++;
            }
        }
    }
    return count;
}
console.log(countSubarraySumEqualToK_2([3, 1, 2, 4], 6));
console.log(countSubarraySumEqualToK_2([1], 1));
console.log(countSubarraySumEqualToK_2([1], 0));