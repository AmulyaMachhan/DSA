function rotateByKPositions(array , k){
    let temp = [];
    for(let i = array.length - k ; i < array.length ; i++){
        temp.push(array[i]);
    }
    for(let i = array.length - 1; i >= k ; i--){
        array[i] = array[i - k];
    }
    for(let i = 0 ; i < k ; i++){
        array[i] = temp[i]
    }
    return array;
}

console.log(rotateByKPositions([1,2,3,4,5,6,7] , 2))

function reverse(arr , start , end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--
    }
}

function rotateByKPositions12(array , k ){
    let size = array.length - 1
    reverse(array ,size - k + 1 , size );
    reverse(array , 0 , size - k);
    reverse(array , 0 , size);
    return array;
}
console.log(rotateByKPositions12([1,2,3,4,5,6,7] , 2))
