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