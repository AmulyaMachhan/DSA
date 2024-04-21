//HERE the positive and negative elements may or may not be equal

function RearrangeElementsBySign(array){
    let positiveArray = [];
    let negativeArray = [];

    for(let i = 0 ; i < array.length ; i++){
        if(array[i] > 0){
            positiveArray.push(array[i]);
        }else{
            negativeArray.push(array[i])
        }
    }

    if(positiveArray.length > negativeArray.length){
        for(let i = 0 ; i < negativeArray.length ; i++){
            array[2*i] = positiveArray[i];
            array[2*i + 1] = negativeArray[i]
        }

        let index = negativeArray.length * 2  + 1
        for(let i = negativeArray + 1 ; i < positiveArray.length ; i++){
            array[index] = positiveArray[i];
            index++;
        }
    }else{
        for(let i = 0 ; i < positiveArray.length ; i++){
            array[2*i] = positiveArray[i];
            array[2*i + 1] = negativeArray[i]
        }
        let index = positiveArray.length * 2;
        for(let i = positiveArray  ; i < negativeArray.length ; i++){
            array[index] = negativeArray[i];
            index++;
        }
    }

    return array;
}

console.log(RearrangeElementsBySign([1,2,-3,-1,-2,-3]));
console.log(RearrangeElementsBySign([1,2,-4,-5,3,4]));