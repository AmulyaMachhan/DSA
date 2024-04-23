//Problem Statement: 
//Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.

//If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).

//Time Complexity: O(3N), where N = size of the given array
//Finding the break-point, finding the next greater element, and reversal at the end takes O(N) for each, where N is the number of elements in the input array. This sums up to 3*O(N) which is approximately O(3N).

//Space Complexity: Since no extra storage is required. Thus, its space complexity is O(1).

function nextGreaterPermutation(array){
    let index = -1;
    let size = array.length - 1;
    for(let i = size ; i >= 0 ; i--){
        if(array[i] < array[i + 1] ){
            index = i;
            break;
        }
    }

    if(index == -1){
        array.reverse();
    }

    for(let i = size ; i > index ; i--){
        if(array[i] > array[index]){
            let temp = array[i];
            array[i] = array[index];
            array[index] = temp;
            break;
        }
    }
    
    reverse(array , index + 1 , size);
    return array;
}

function reverse(array , leftIndex , rightIndex){
    while(leftIndex < rightIndex){
        let temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}

console.log(nextGreaterPermutation([2,1,5,4,3,0,0]));
