//OPTIMAL APPROACH
// In this optimal approach, we will try to solve the problem in a single pass and try to arrange the array elements in the correct order in that pass only.
// We know that the resultant array must start from a positive element so we initialize the positive index as 0 and negative index as 1 and start traversing the array such that whenever we see the first positive element, it occupies the space at 0 and then posIndex increases by 2 (alternate places).
// Similarly, when we encounter the first negative element, it occupies the position at index 1, and then each time we find a negative number, we put it on the negIndex and it increments by 2.
// When both the negIndex and posIndex exceed the size of the array, we see that the whole array is now rearranged alternatively according to the sign.
function RearrangeElementsBySign_2(array){
    let result = [];
    let positiveIndex = 0;
    let negativeIndex = 1;
    for(let  i = 0 ; i < array.length ; i++){
        if(array[i] > 0){
            result[positiveIndex] = array[i];
            positiveIndex += 2;
        }else{
            result[negativeIndex] = array[i];
            negativeIndex += 2;
        }
    }
    return result;
}
console.log(RearrangeElementsBySign_2([1,2,-4,-3]));

//BRUTE FORCE APPROACH
function RearrangeElementsBySign(array){
    let positiveArray = [];
    let negativeArray = [];
    for(let  i= 0 ; i < array.length ; i++){
        if(array[i] > 0){
            positiveArray.push(array[i]);
        }else{
            negativeArray.push(array[i]);
        }
    }

    for(let i = 0 ; i < array.length/2 ; i++){
        // if( i % 2 === 0){
        //     array[i] = positiveArray[i/2]
        // }else{
        //     array[i] = negativeArray[(i-1)/2]
        // }
        array[2*i] = positiveArray[i];
        array[2*i + 1] = negativeArray[i];
    }
    return array;
}

console.log(RearrangeElementsBySign([1,2,-4,-3]));

