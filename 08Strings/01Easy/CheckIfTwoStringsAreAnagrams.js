// Problem Statement: 
//Given two strings, check if two strings are anagrams of each other or not.

//OPTIMAL APPROACH
function checkIfTwoStringsAreAnagrams_1(str1 , str2){
    let freq = {};
    //Both strings are of different lengths cannot be anagrams so return false;

    if(str1.length !== str2.length) return false;
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

// Time Complexity: O(n), where n is the length of the longer string among str1 and str2. 
// Both for loops iterate over the characters of the strings once, and the final loop iterates over the frequency object, which contains at most n entries.

// Space Complexity: O(n), where n is the length of the longer string among str1 and str2. 
// The space complexity is determined by the size of the frequency object freq, which can contain at most n unique characters. 

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