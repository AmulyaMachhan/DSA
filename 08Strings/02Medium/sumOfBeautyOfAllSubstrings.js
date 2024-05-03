// PROBLEM STATEMENT
// The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

// For example, the beauty of "abaacc" is 3 - 1 = 2.
// Given a string s, return the sum of beauty of all of its substrings.

function sumOfBeautyOfAllSubstrings(string){
    let n = string.length;
    let ans = 0;
    for(let i = 0 ; i < n ; i++){
        const map = new Map();
        for(let j = i ; j < n ; j++){
            map.set(string[j] , (map.get(string[j]) || 0) + 1);
            const t = Array.from(map.values());
            ans += Math.max(...t) - Math.min(...t);
        }
    }

    return ans;
}

console.log(sumOfBeautyOfAllSubstrings("aabc"));
console.log(sumOfBeautyOfAllSubstrings("aabcb"));
console.log(sumOfBeautyOfAllSubstrings("aabcbaa"));