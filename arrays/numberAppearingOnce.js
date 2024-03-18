//This is an optimal approach
//Two important properties of XOR are the following:

// XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
// XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2

// Here all the numbers except the single number appear twice and so will form a pair. Now, if we perform XOR of all elements of the array, the XOR of each pair will result in 0 according to the XOR property 1. The result will be = 0 ^ (single number) = single number (according to property 2).

// So, if we perform the XOR of all the numbers of the array elements, we will be left with a single number.
function numberAppearingOnce(array){
    let result = 0;
    for(let i = 0 ; i < array.length ; i++){
        result = result ^ array[i]; 
    }
    return result;
}
console.log(numberAppearingOnce([1,2,3,1,2,3,4]));
console.log(numberAppearingOnce([1,2,3,1,2,3]));
console.log(numberAppearingOnce([1,2,3,1,3]));

//Better Approach
function numberAppearingOnce2(array){
    let result = {};
    for(let i = 0 ; i < array.length ; i++){
        if(result[array[i]]){
            result[array[i]]++;
        }else{
            result[array[i]] = 1;
        }
    }
    console.table(result);
    for(let key in result){
        if(result[key] === 1){
            return key;
        }
    }
    return "No key"
}
console.log(numberAppearingOnce2([1,2,3,1,2,3,4]));
console.log(numberAppearingOnce2([1,2,3,1,2,3]));
console.log(numberAppearingOnce2([1,2,3,1,3]));

