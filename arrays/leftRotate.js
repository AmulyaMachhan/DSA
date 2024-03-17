function leftRotate(array){
    let temp = array[0];

    for(let i = 0 ; i< array.length; i++){
        array[i] = array[i+1];
    }
    array[array.length - 1] = temp;
    return array;
}

console.log(leftRotate([1,2,3,4,5,6]))