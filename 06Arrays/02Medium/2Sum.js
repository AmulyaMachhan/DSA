//Optimal Approach
//Two Pointers but using sort method
function TwoSum2(array , target){
    array.sort((a,b)=> a - b)
    let left = 0;
    let right = array.length - 1;
    while(left < right){
        if(array[left] + array[right] < target){
            left++;
        }else if(array[left] + array[right] > target){
            right--;
        }else{
           return [array[left] , array[right]];
        }
    }
}
console.log(TwoSum2([2,3,4,5,6],7));
//Better Approach
//using HashMap
function TwoSum1(array , target){
    let hashMap = new Map();
    for(let i = 0 ; i<array.length; i++){
        let firstElement = array[i];
        let secondELement = target - firstElement;
        if(hashMap.has(secondELement)){
            return [array[hashMap.get(secondELement)],array[i]];
        }
        hashMap.set(firstElement , i);
    }
}
console.log(TwoSum1([2,3,4,5,6],7));

function TwoSum(array , target){
    for(let i = 0 ; i< array.length ; i++){
        for(let j = 1 ; j < array.length ; j++){
            if(array[i] + array[j] == target){
                return [array[i], array[j]]
            }
        }
    }
}
console.log(TwoSum([2,3,4,5,6],7));