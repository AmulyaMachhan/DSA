//BETTER APPROACH
//Using HashMap where the count of each element in array is stored 
function majorityElementThatAppearsNBy3Times(array){
    let hashMap = {};
    let result = [];
    for(let i = 0 ; i < array.length ; i++){
        if(hashMap[array[i]]){
            hashMap[array[i]]++;
        }else{
            hashMap[array[i]] = 1;
        }
    }

    for(let key in hashMap){
        if(hashMap[key] >= Math.floor(array.length/3)){
            result.push(key);
        }
    }
    return result;
}

console.table(majorityElementThatAppearsNBy3Times([11,11,33,33,11,33]));
console.table(majorityElementThatAppearsNBy3Times([1,2,2,3,3,2]));