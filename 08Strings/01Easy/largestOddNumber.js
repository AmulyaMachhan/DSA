//PROBLEM STATEMENT
//You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
//A substring is a contiguous sequence of characters within a string.

//OPTIMAL APPROACH
function largestOddNumber(string){
    for(let i = string.length - 1 ; i >= 0 ; i--){
        if(string[i] % 2 === 1){
            return string.substring(0 , i+1);
        }
    }
    return "";
}

console.log(largestOddNumber("4206"));
console.log(largestOddNumber("3247"));
console.log(largestOddNumber("52"));

// Time complexity: O(n), where n is the length of the input number num. 
// We iterate through the digits once.

// Space complexity: O(1) 
// We only use a constant amount of extra space for variables.