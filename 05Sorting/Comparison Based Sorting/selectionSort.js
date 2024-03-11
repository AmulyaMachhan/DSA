// SELECTION SORT
// Selection sort is a simple comparison-based sorting algorithm. 
// It sorts an array by repeatedly finding the minimum element from the unsorted part and moving it to the sorted part. 

// Steps of Selection Sort
// 1. Initialize:
// Start with the first element of the array.

// 2. Find the Minimum:
// Look for the smallest element in the unsorted part of the array.

// 3. Swap:
// Swap the smallest found element with the first element of the unsorted part.

// 4. Move the Boundary:
// Move the boundary between the sorted and unsorted parts one element to the right.

// Repeat:

function selectionSort(arr){

    for(let i = 0 ; i<arr.length ; i++){
        let min = i;
        let temp;
        for(let j = i+1 ; j <arr.length ; j++ ){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        temp = arr[i];
        arr[i] =arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort([6,5,4,3,3,1,2,4,56]));