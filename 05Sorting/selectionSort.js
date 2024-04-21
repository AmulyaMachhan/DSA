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