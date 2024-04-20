//OPTIMAL APPROACH
function reversePairs(array , low , mid){
    
    
}
function mergeSort(array , low , high){
    let count = 0;

    if(low  >= high ){
        return count
    }
    let mid = Math.floor((low  + high)/2);

    count += mergeSort(array , 0 , mid);
    count += mergeSort(array , mid + 1 , high);
    count += merge(array , low , mid , high);

    return count;
}

function merge(array , low , mid , high){
    let leftIndex = low
    let rightIndex = mid + 1;
    let result = [];
    let count = 0;
    while(leftIndex <= mid && rightIndex <= high){
        if(array[leftIndex] <= array[rightIndex]){
            result.push(array[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(array[rightIndex]);
            count += (mid - leftIndex + 1);
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

    return count;
}

//BRUTE FORCE METHOD
function reversePairs(array){
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

console.log(reversePairs([1,3,2,3,1]));
console.log(reversePairs([3,2,1,4]));