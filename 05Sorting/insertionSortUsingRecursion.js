function insertionSortUsingRecursion(arr , i , n){
    if( i === n){
        return arr;
    }
    let j = i;
    while(j>0 && arr[j-1] > arr[j]){
        let temp = arr[j-1];
        arr[j-1]= arr[j];
        arr[j]=temp;
        j--;
    }

    return insertionSortUsingRecursion(arr , i + 1 , n );
}

console.log(insertionSortUsingRecursion([9,8,7,6,5,4,3,9,8,0] , 0 ,10))