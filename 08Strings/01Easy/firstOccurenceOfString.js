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