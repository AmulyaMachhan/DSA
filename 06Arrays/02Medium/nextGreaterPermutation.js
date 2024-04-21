function nextGreaterPermutation(array){
    let index = -1;
    let size = array.length - 1;
    for(let i = size ; i >= 0 ; i--){
        if(array[i] < array[i + 1] ){
            index = i;
            break;
        }
    }

    if(index == -1){
        array.reverse();
    }

    for(let i = size ; i > index ; i--){
        if(array[i] > array[index]){
            let temp = array[i];
            array[i] = array[index];
            array[index] = temp;
            break;
        }
    }
    
    reverse(array , index + 1 , size);
    return array;
}

function reverse(array , leftIndex , rightIndex){
    while(leftIndex < rightIndex){
        let temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}

console.log(nextGreaterPermutation([2,1,5,4,3,0,0]));
