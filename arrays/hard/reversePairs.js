//OPTIMAL APPROACH
function reversePairs(array , low , mid , high){
    let right = mid + 1 ;
    let count = 0;

    for(let i = low ; i <= mid ; i++){

        while(right <= high && array[i] > 2 * array[right]){
            right++
        }
        count += (right - (mid + 1));
    }
    return count
}
function mergeSort(array , low , high){
    let count = 0;

    if(low  >= high ){
        return count
    }
    let mid = Math.floor((low  + high)/2);

    count += mergeSort(array , low , mid);
    count += mergeSort(array , mid + 1 , high);
    count += reversePairs(array , low , mid , high)
    merge(array , low , mid , high);

    return count;
}

function merge(array , low , mid , high){
    let leftIndex = low
    let rightIndex = mid + 1;
    let result = [];
    while(leftIndex <= mid && rightIndex <= high){
        if(array[leftIndex] <= array[rightIndex]){
            result.push(array[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(array[rightIndex]);
            rightIndex++;
        }
    }

    while(leftIndex <= mid){
        result.push(array[leftIndex])
        leftIndex++;
    }
    while(rightIndex <= high){
        result.push(array[rightIndex])
        rightIndex++;
    }

    for(let i = low ; i <= high ; i++){
        array[i] = result[i - low]
    }
}

console.log(mergeSort([1,3,2,3,1], 0 , 4));
console.log(mergeSort([3,2,1,4] , 0 , 3));

//BRUTE FORCE METHOD
function reversePairs_1(array){
    let count = 0 ;
    for(let i = 0 ; i < array.length ; i++){
        for(let j = i + 1 ; j < array.length ;j++){
            if(array[i] > 2 * array[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(reversePairs_1([1,3,2,3,1]));
console.log(reversePairs_1([3,2,1,4]));