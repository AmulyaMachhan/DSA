//PROBLEM STATEMENT
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//APPROACH - 2
//Better approach 
//Uses HashMap and stack both
function isValidParanthesis_1(string){
    const stack = [];
    const pairs = {
        "(" : ")",
        "{" : "}",
        "[" : "]",
    };

    for(const char of string){
        if(pairs[char]) stack.push(char);
        else{
            if (pairs[stack.pop()] !== char) return false;  
        }
    }
    return !stack.length;
}

// Time complexity: O(n), where n is the length of the input string. 
// We iterate through each character in the string once.

// Space complexity: O(n), where n is the length of the input string. 
// In the worst case, the stack can hold all opening brackets in the string.

console.log(isValidParanthesis_1("(){}[]"));
console.log(isValidParanthesis_1("(]"));
//APPROACH - 1 
//Using only stack
function isValidParanthesis(string){
    let stack = [];

    for(let i = 0 ; i < string.length ; i++){
        if(string[i] == "(" || string[i] == "{" || string[i] == "[") {
            stack.push(string[i]);
        }
        else{
            if(!stack.length ||
            string[i] == ")" && stack[stack.length - 1] !== "(" ||
            string[i] == "}" && stack[stack.length - 1] !== "{" ||
            string[i] == "]" && stack[stack.length - 1] !== "[" ) {
                return false
            }
            stack.pop();
        }
    }
    return !stack.length;
}

console.log(isValidParanthesis("(){}[]"));
console.log(isValidParanthesis("(]"));

//Time complexity: O(n), where n is the length of the input string. 
//We iterate through each character in the string once.

//Space complexity: O(n), where n is the length of the input string. 
//In the worst case, the stack can hold all opening brackets in the string.