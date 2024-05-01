//PROBLEM STATEMENT:
//Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""


//OPTIMAL APPROACH
//Horizontal scanning
function longestCommonPrefix(strings){
    let m = strings.length;
    if(m == 0) return "";
    if(m == 1) return strings[0];

    strings.sort();
    let res = '';

    let n = strings[0].length;
    for(let i = 0 ; i < n ; i++){
        if(strings[0][i] === strings[m-1][i]){
            res += strings[0][i];
        }else {
            break;
        }
    }
    return res;
}
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));

// Time Complexity: O(NlogN+L) where N = number of strings , L = average length of strings 
// Sorting the array of strings takes O(NlogN) time complexity. 
// Then, iterating through the characters of the first and last strings to find the longest common prefix takes O(L) time. 

// Space Complexity: O(L) where L = length of common prefix
// The space complexity is dominated by the space used for the output string res. 
// Since we are not using any additional data structures that grow with the input size. 

//BETTER APPRAOCH
//Using Binary Search
function longestCommonPrefix_1(strings){
    let n = strings.length;
    let min = Infinity;
    for(let i = 0 ; i < n ; i++){
        min = Math.min(strings[i].length , min);
    }

    let low = 0;
    let high = min - 1;

    while(low <= high){
        let mid = Math.floor((high + low)/2);
        let allEqual = true;
        for(const s of strings){
            if(s.slice(0 , mid + 1) != strings[0].slice(0 , mid + 1)){
                allEqual = false;
                break;
            }
        }
        if(allEqual){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    
    return strings[0].slice(0 , low);
}
console.log(longestCommonPrefix_1(["flower","flow","flight"]));
console.log(longestCommonPrefix_1(["dog","racecar","car"]));

// Time Complexity:
// Finding the length of the shortest string: O(n), where n is the number of strings in the array.
// Binary search for the longest common prefix: O(log m), where m is the length of the shortest string.
// Overall, the time complexity is O(n log m).

// Space Complexity:
// Space required for variables and the output string: O(1), as the space usage does not depend on the input size.
// Additional space used during execution: O(1), as the algorithm does not use additional data structures.
// Overall, the space complexity is O(1).

//BRUTE FORCE APPROACH
function longestCommonPrefix(strings) {
    if (strings.length === 0) return "";
    
    let prefix = strings[0]; // Initialize prefix with the first string
    
    for (let i = 1; i < strings.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strings[i].length && prefix[j] === strings[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j); // Update prefix to the common substring
        if (prefix === "") return ""; // If prefix becomes empty, no common prefix exists
    }
    
    return prefix;
};

// Time complexity = O(n * m), where:
// n is the number of strings in the array strs.
// m is the length of the shortest string in the array.
// This is because the function iterates through each character of the strings, and in the worst case, it needs to compare each character of each string with the characters in the prefix.

// Space complexity = O(1) because the function uses a constant amount of extra space for variables like prefix, regardless of the input size.