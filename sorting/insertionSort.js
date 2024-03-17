function insertionSort(arr){
    
    for(let i = 0 ; i < arr.length ; i++){

        let j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            let temp = arr[j-1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([7,8,9,5,6,7,3,2,10]))

function insertionSort1(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j=i ; j> 0; j--){
            if(arr[j-1] > arr[j]){
                let temp = arr[j-1];
                arr[j-1]= arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(insertionSort1([7,8,9,5,6,7,3,2,10]))