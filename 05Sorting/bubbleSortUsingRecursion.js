function bubbleSortUsingRecursion(arr , n){
    if(n < 1){
        return arr;
    }
    for(let j = 0 ; j < n - 1; j++ ){
        if(arr[j] > arr[j+1] ){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }

    return bubbleSortUsingRecursion(arr , n -1);
}
console.log(bubbleSortUsingRecursion([7,8,6,5,9,2,1],7))