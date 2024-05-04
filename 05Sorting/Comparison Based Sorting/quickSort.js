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