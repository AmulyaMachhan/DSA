//PROBLEM STATEMENT
//Given a string s, return the longest palindromicsubstring  in s.

//BRUTE FORCE APPROACH
function longestPalindromicSubstring(string){
    let maxLength = 0;
    let start = 0;
    for(let i = 0 ; i < string.length ; i++){
        for(let j = i + 1 ; j < string.length ; j++){
            let substr = string.substring(i , j)
            if(isPalindrome(substr) && substr.length > maxLength){
                maxLength = substr.length;
                start = i;
            }
        }
    }
    return string.substr(start , maxLength);
}

function isPalindrome(str){
    for(let i = 0 ; i < str.length/2 ; i++ ){
        if(str[i] != str[str.length - i - 1]){
            return false;
        }
    }
    return true;
}

// Time Complexity:
// longestPalindromicSubstring function: O(n^3)
// This is because there are two nested loops iterating over the string, and for each substring, the isPalindrome function is called, which also has a time complexity of O(n) in the worst case.
// isPalindrome function: O(n)

// Space Complexity:
// longestPalindromicSubstring function: O(n)
// This is because because the substring function creates a new substring for each pair of indices (i,j), and the space required for the substrings grows with the length of the input string
// isPalindrome function: O(1)
console.log(longestPalindromicSubstring("babad"));
console.log(longestPalindromicSubstring("cbbd"));
