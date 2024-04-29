//NAIVE APPROACH
function checkIfTwoStringsAreAnagrams(str1  , str2){

    let arr1 = str1.split('');
    let arr2 = str2.split('');
    arr1.sort();
    arr2.sort();
    if(arr1.join('') == arr2.join('')) return true;
    return false;
}

console.log(checkIfTwoStringsAreAnagrams("CAT" , "TAC"))