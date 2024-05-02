//PROBLEM STATEMENT
//A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.

function maxNestingDepthOfParanthesis(string){
    let count = 0;
    let maxCount = 0;
    for(let i = 0 ; i < string.length ; i++){
        if(string[i] == "(") count++;
        if(string[i] == ")") count--;
        maxCount = Math.max(maxCount , count)
    }
    return maxCount;
}
console.log(maxNestingDepthOfParanthesis(""));
console.log(maxNestingDepthOfParanthesis("()()"));
console.log(maxNestingDepthOfParanthesis("()(()())"));
console.log(maxNestingDepthOfParanthesis("(())(()((((())))))"));

// Time complexity: O(n), where n is the length of the string s.
// We iterate through the string once.

// Space complexity: O(1). 
//We use a constant amount of extra space for storing variables regardless of the input size.
