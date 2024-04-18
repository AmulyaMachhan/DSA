function intersectionOfArrays(arr1 ,arr2){
    let n = arr1.length;
    let m = arr2.length;

    let result = [];
    let set = new Set(arr1);
    for(let i = 0; i < m; i++){
        if(set.has(arr2[i])){
            if(!result.includes(arr2[i])) result.push(arr2[i]);
        }
    }

    return result;
}

console.log(intersectionOfArrays([1,2,2,1], [2,2]));
console.log(intersectionOfArrays([4,9,5], [9,4,9,8,4]));