//OPTIMAL APPROACH Using Binary Search
function singleElementInSortedArray_1(array){
    let n = array.length;

    //Edge Cases
    if(array.length === 1) return array[0];
    if(array[0] !== array[1]) return array[0];
    if(array[n - 1] !== array[n - 2]) return array[n];
    
    let low = 1 , high = n - 2;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        //If array[mid] is the single element
        if(array[mid] !== array[mid - 1] && array[mid] !== array[mid + 1]) return array[mid];

        // for the left half where the elements are odd , even
        if( (mid % 2) === 0 && array[mid] === array[mid + 1] 
                             ||
            (mid % 2) === 1 && array[mid] === array[mid - 1]){
                //Eliminate the left half
                low = mid + 1;
            }
        else{
                //Eliminate the right half
                high = mid - 1;
        }
    }

    return -1;
}
console.log(singleElementInSortedArray_1([1,1,2,2,3,4,4]))

//USING XOR 
//This is the optimal approach if the array is not sorted 
function singleElementInSortedArray(array){
    let xor = 0;
    for(let i = 0 ; i < array.length; i++){
        xor ^= array[i];
    }
    return xor;
}

console.log(singleElementInSortedArray([1,1,2,2,3,4,4]))