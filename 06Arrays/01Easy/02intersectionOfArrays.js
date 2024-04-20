function intersectionOfArrays(arr1 , arr2){
    let map = new Map();
    let result = [];
    for(let i =0 ; i<arr1.length; i++){
        map.set(arr1[i] , (map.get(arr1[i]) || 0) + 1);
    }

    for(let i = 0; i < arr2.length; i++){
        if(map.has(arr2[i]) && map.get(arr2[i]) > 0){
            result.push(arr2[i]);
            map.set(arr2[i] , map.get(arr2[i]) - 1);
        }
    }
    return result;
}

console.log(intersectionOfArrays([1,2,2,1], [2,2]));
console.log(intersectionOfArrays([4,9,5], [9,4,9,8,4]));