//PROBLEM STATEMENT
//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 
//Using in Built-in function 
function firstOccurenceOfString_2(haystack , needle){
    if(haystack.includes(needle)) return haystack.indexOf(needle);
    return -1;
}

console.log(firstOccurenceOfString_2("sadbutsad" , "sad"));
console.log(firstOccurenceOfString_2("leetcode" , "leeto"));

//OPTIMAL APPROACH
//SLIDING WINDOW AND TWO POINTERS
function firstOccurenceOfString_1(haystack , needle){
    for(let i = 0 ; i < haystack.length - needle.length ; i++){
        let found = true;
        for(let j = 0; j < needle.length ; j++){
            if(haystack[i + j] !== needle[j]){
                found = false;
                break;
            }
        }
        if(found)
            return i;
    }
    return -1;
}

console.log(firstOccurenceOfString_1("sadbutsad" , "sad"));
console.log(firstOccurenceOfString_1("leetcode" , "leeto"));

//BRUTE FORCE APPROACH
function firstOccurenceOfString( haystack , needle){
    for(let i = 0 ; i < haystack.length ; i++){
        let str = haystack[i];
        for(let j = i + 1; j < haystack.length ; j++){
            str += haystack[j];
            if(str === needle) return i;
        }
    }
    return -1;
}

console.log(firstOccurenceOfString("sadbutsad" , "sad"));
console.log(firstOccurenceOfString("leetcode" , "leeto"));