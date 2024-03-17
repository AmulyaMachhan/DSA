function joinTwoSortedArrays( arr1 , arr2){
    const result = [];
    let i=0;
    let j=0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            if(result.length === 0 || result[result.length - 1] !== arr1[i]){
                result.push(arr1[i]);
            } 
            i++;
        }
        else if(arr1[i] > arr2[j]){
            if(result.length === 0 || result[result.length - 1] !== arr1[j]){
                result.push(arr2[j]);
            } 
            j++;
        }
        else{
            if(result.length === 0 || result[result.length - 1] !== arr1[i]){
                result.push(arr1[i]);
            } 
            j++;
            i++;
        }
    }
    console.log(i);
    console.log(j);

    while(i < arr1.length){
        if(result[result.length - 1] !== arr1[i]){
            result.push(arr1[i]);
        }
        i++;
    }
    
    while(j < arr2.length){
        if(result[result.length - 1] !== arr2[j]){
            result.push(arr2[j]);
        }
        j++;
    }
    return result;
}
console.log(joinTwoSortedArrays([1,4,7],[2,5,6,7]));
console.log(joinTwoSortedArrays([1,2,3,4,5],[2,3,4,4,5]));
console.log(joinTwoSortedArrays([1,2,3,4,5,6,7,8,9,10],[2,3,4,4,5,11,12]));