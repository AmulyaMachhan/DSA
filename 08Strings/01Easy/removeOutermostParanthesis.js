//PROBLEM STATEMENT
//A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

//OPTIMAL APPROACH
function removeOutermostParanthesis(string){
    let count = 0;
    let res = "";

    for(let i = 0 ; i < string.length ; i++){
        if(string[i] == "(" && count++ > 0){
            res += string[i];
        }

        if(string[i] == ")" && count-- > 1){
            res += string[i];
        }
    }

    return res;
}

console.log(removeOutermostParanthesis("(()())(())"));
console.log(removeOutermostParanthesis("(()())(())(()(()))"));

// Time complexity: O(n), where n is the length of the input string s. 
// We iterate through the string once.

// Space complexity: O(n), where n is the length of the input string s. 
//We use the res variable to store the modified string.

//BRUTE FORCE APPROACH
function removeOutermostParanthesis_1(string){
    let openCount = 0;
    let res = "";
    let start = 0;
    for(let i = 0 ; i < string.length ; i++){
        if(string[i] == "("){
            openCount++;
        }else{
            openCount--;
        }

        if(openCount === 0){
            if(start < i){
                res += string.substring(start + 1 , i);
            }
            start = i + 1;
        }
    }

    return res;
}

console.log(removeOutermostParanthesis_1("(()())(())"));
console.log(removeOutermostParanthesis_1("(()())(())(()(()))"));