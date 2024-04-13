function repeatingAndMissingNumbers(array){
    let hashMap = {};

    for(let i = 0; i < array.length ; i++){
        if(hashMap[array[i]]){
            hashMap[array[i]]++;
        }else{
           hashMap[array[i]] = 1;
        }
    }
    console.table(hashMap)
    let repeating;
    let missing;
    for(let i = 0; i < array.length ; i++){
        if(hashMap[i] == 2){
            repeating = i;
        }

        if(hashMap[i] == undefined){
            missing = i
        }
    }

    return [repeating , missing];
}

console.log(repeatingAndMissingNumbers([3,1,2,5,3]))