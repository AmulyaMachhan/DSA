function countingSort(array){
    let max = Math.max(...array);

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