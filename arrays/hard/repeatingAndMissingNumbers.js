function repeatingAndMissingNumbers(array){
    let hashMap = {};

    for(let i = 0; i < array.length ; i++){
        if(hashMap(array[i])){
            hashMap(array[i])++;
        }else{
           hashMap(array[i]) = 1;
        }
    }
    
    for(let key in hashMap){
        if(hashMap[key] > 1){
            return key;
        }
    }
}

console.log(repeatingAndMissingNumbers([3,1,2,5,3]))