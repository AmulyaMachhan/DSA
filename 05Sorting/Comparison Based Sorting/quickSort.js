// QUICK SORT
// QuickSort is a sorting algorithm based on the Divide and Conquer algorithm.
// It picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.

// Steps of Quick Sort
// 1. Choose a Pivot:
// Select an element from the array as the pivot. Various strategies can be used to choose the pivot (e.g., first element, last element, random element, or median).

// 2. Partitioning:
// Rearrange the array such that elements less than the pivot are on the left, elements greater than the pivot are on the right, and the pivot is in its final sorted position.
// This step is crucial as it ensures that the pivot is in the correct place in the sorted array.

// 3. Recursively Apply:
// Recursively apply the above steps to the sub-arrays of elements with smaller values and elements with larger values.

function quickSort(arr, start, end) {
  if (start < end) { // Base case: if subarray has 1 or 0 elements, it's already sorted
    let pivot = partition(arr, start, end);
    quickSort(arr, start, pivot - 1); // Sort left subarray
    quickSort(arr, pivot + 1, end); // Sort right subarray
  }
  return arr; // Return the sorted array
}

function partition(arr, start, end) {
  let pivot = arr[start]; // Choose first element as pivot (consider median-of-three for optimization)
  let low = start + 1;
  let high = end;

  while (low <= high) {
    while (arr[low] <= pivot) {
      low++; // Move low index until it finds a value greater than the pivot
    }
    while ( arr[high] > pivot) {
      high--; // Move high index until it finds a value less than or equal to the pivot
    }

    if (low < high) { // Swap elements if low and high haven't crossed
      swap(arr, low, high);
    }
  }

  // Place the pivot in its final position
  arr[start] = arr[high];
  arr[high] = pivot;

  return high; // Return the index of the pivot element
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([7, 1, 6, 9, 8], 0, 4))
console.log(quickSort([7, 1, 6, 9, 8,0,1,6,10], 0, 8))