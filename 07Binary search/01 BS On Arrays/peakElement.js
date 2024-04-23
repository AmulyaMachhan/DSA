//Problem Statement: Given an array of length N. 
//Peak element is defined as the element greater than both of its neighbors. 
//If arr[i] = peak element, arr[i - 1] < arr[i] and arr[i + 1] < arr[i]. 
//Find the index(0-based) of a peak element in the array. 
//If there are multiple peak numbers, return the index of any peak number.

//Note: 
//For the first element, the previous element = negative infinity. 
//For the last element, the next element = negative infinity.
function peakElement(array){
    let n = array.length;

    if(array.length === 1) return 0;
    if(array[0] > array[1]) return 0;
    if(array[n - 1] > array[n - 2]) return n - 1;

    let low = 1 , high = n - 2;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        if(array[mid] > array[mid + 1] && array[mid] > array[mid - 1]) return mid;

        if(array[mid] > array[mid - 1]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    } 
    return -1
}

console.log(peakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]));
console.log(peakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(peakElement([1, 2, 3, 4, 5]));
console.log(peakElement([5, 4, 3, 2, 1]));