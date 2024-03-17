function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft , sortedRight);
}

function merge(leftArray , rightArray){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArray.length &&  rightIndex < rightArray.length){
        if(leftArray[leftIndex] < rightArray[rightIndex]){
            result.push(leftArray[leftIndex]);
            leftIndex++;
        }else{
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    while(leftIndex < leftArray.length){
        result.push(leftArray[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < rightArray.length){
        result.push(rightArray[rightIndex]);
        rightIndex++; 
    }
    return result;
}
console.log(mergeSort([9,5,7,6,4,0,8]))