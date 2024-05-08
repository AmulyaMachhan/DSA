// PROBLEM STATEMENT :
// Given a string of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly k distinct characters. 

function countNumberOfSubstrings(string , k){
    let n = string.length;

    let charCountMap = new Map();
    let left = 0;
    let windowSize =0;
    let count = 0;
    for(let right = 0 ; right < n ; right++){

        charCountMap.set(string[right] , (charCountMap.get(string[right]) || 0) + 1);

        while(charCountMap.size > k){
            charCountMap.set(string[left] , charCountMap.get(string[left]) - 1);
            if(charCountMap.get(string[left]) == 0){
                charCountMap.delete(string[left]);
            }
            left++;
            windowSize--;
        }
        windowSize += 1;
        if(charCountMap.size === k){
            count += windowSize;
        }
    }
    return count;
}

console.log(countNumberOfSubstrings("aba" , 2));
console.log(countNumberOfSubstrings("abaaca" , 1));