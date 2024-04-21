function moveZeroesToRight(array){
    let i = 0;
    let j = 0;
    while(j < array.length){
        if(array[j] !== 0){
            array[i] = array[j];
            i++;
        }
        j++;
    }
    while(i< array.length){
        array[i]=0;
        i++;
    }
    return array;
} 
console.log(moveZeroesToRight([1,2,0,5,0,0,9,0]));