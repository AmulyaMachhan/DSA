//Counting Sort is a non-comparison-based sorting algorithm that works well when there is limited range of input values. It is particularly efficient when the range of input values is small compared to the number of elements to be sorted. 
//The basic idea behind Counting Sort is to count the frequency of each distinct element in the input array and use that information to place the elements in their correct sorted positions.

//Counting Sort Algorithm:
// 1. Declare an auxiliary array countArray[] of size max(inputArray[])+1 and initialize it with 0.
// 2. Traverse array inputArray[] and map each element of inputArray[] as an index of countArray[] array, i.e., execute countArray[inputArray[i]]++ for 0 <= i < N.
// 3. Calculate the prefix sum at every index of array inputArray[].
// 4. Create an array outputArray[] of size N.
// 5. Traverse array inputArray[] from end and update outputArray[ countArray[ inputArray[i] ] – 1] = inputArray[i]. Also, update countArray[ inputArray[i] ] = countArray[ inputArray[i] ]-– .
function countingSort(array){
    let max = Math.max(...array);

    //Count the occurence of the element
    let countArray = new Array(max + 1).fill(0);
    for(let i = 0; i <= max ; i++){
        countArray[array[i]]++;
    }

    //Prefix or cumulative sum of elements
    for(let i = 1; i <= max ; i++){
        countArray[i] += countArray[i -1];
    }

    let sortedArray = new Array(array.length);
    for(let i = array.length - 1; i >= 0; i--){
        sortedArray[countArray[array[i]] - 1] = array[i];
        countArray[array[i]]--;
    }

    return sortedArray;
}

console.log(countingSort([4, 3, 12, 1, 5, 5, 3, 9]))