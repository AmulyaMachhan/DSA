//OPTIMAL APPROACH
function checkIfTwoStringsAreAnagrams_1(str1 , str2){
    let freq = {};

    for(let i = 0 ; i < str1.length ; i++){
        if(!freq[str1[i]]){
            freq[str1[i]] = 1;
        }else{
            freq[str1[i]]++;        
        }
    }
    
    for(let i = 0 ; i < str2.length ; i++){
        if(freq[str2[i]]){
            freq[str2[i]]--;
        }else{
            freq[str2[i]] = -1;
        }
    }
    console.log(freq)
    for(let keys in freq){
        if(freq[keys] !== 0){
            return false;
        }
    }
    return true;
}

console.log(checkIfTwoStringsAreAnagrams_1("cat" , "tac"));
console.log(checkIfTwoStringsAreAnagrams_1("cat" , "tacee"));

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