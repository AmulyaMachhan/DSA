//PROBLEM STATEMENT
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Edge case: If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then round the integer to remain in the range. Specifically, integers less than -2^31 should be rounded to -2^31, and integers greater than 2^31 - 1 should be rounded to 2^31 - 1.
// Return the integer as the final result.

//OPTIMAL APPROACH
function stringToInteger_2(str){
    str = str.trim();
    if (!str) {
        return 0;
    }
    const parseDigit = s => {
        if (s === '0') return 0;
        if (s === '1') return 1;
        if (s === '2') return 2;
        if (s === '3') return 3;
        if (s === '4') return 4;
        if (s === '5') return 5;
        if (s === '6') return 6;
        if (s === '7') return 7;
        if (s === '8') return 8;
        if (s === '9') return 9;
        return -1;
    }

    let sign = str[0] === '-' ? -1 : 1;

    if (str[0] === '-' || str[0] === '+') {
        str = str.slice(1);
    }

    let length = str.length;
    let result = 0;

    for (let i = 0; i < length; ++i) {
        const digit = parseDigit(str[i])
        if (digit >= 0) {
            result = result * 10 + digit;
        }else {
            break;
        }
    }
    result = result * sign;
    if (sign === -1 && result < -0x80000000) {
        return -0x80000000;
    }
    if (result > 0x7fffffff) {
        return 0x7fffffff;
    }
    return result;
};

console.log(stringToInteger_2("-45"));
console.log(stringToInteger_2("-0045"));
console.log(stringToInteger_2("1337c0d3"));

// Time Complexity:
// The time complexity of the function is O(n), where n is the length of the input string str. This is because the function iterates through each character of the string once in the for loop, and each character operation inside the loop takes constant time.

// Space Complexity:
// The space complexity of the function is O(1), which means it requires constant space. This is because the space used by the function does not depend on the size of the input string str, but rather on the number of variables and operations performed within the function, which remains constant regardless of the input size.

//SOULTION - 2
function stringToInteger_1 (s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    // Skip leading whitespaces
    while (s[i] === ' ') {
        i++;
    }

    // Determine sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Read integer value
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;
    }

    // Apply sign and handle out-of-range values
    result *= sign;
    result = Math.max(Math.min(result, Math.pow(2, 31) - 1), -Math.pow(2, 31));

    return result;
};

console.log(stringToInteger_1("-45"));
console.log(stringToInteger_1("-0045"));
console.log(stringToInteger_1("1337c0d3"));

// Time Complexity:
// The time complexity of the function is O(n), where n is the length of the input string s. This is because the function iterates through each character of the string once.

// Space Complexity:
// The space complexity of the function is O(1), which means it requires constant space. This is because the space used by the function does not depend on the size of the input string s, but rather on the number of variables and operations performed within the function, which remains constant regardless of the input size.

//SOLUTION - 1
function stringToInteger(string){
    string.trim();

    let integer = parseInt(string);
    if(isNaN(integer)) return 0;
    
    if (integer > 0x7fffffff) {
        return 0x7fffffff;
      }
      if (integer < -0x80000000) {
        return -0x80000000;
      }
      return integer;
};

console.log(stringToInteger("-45"));
console.log(stringToInteger("-0045"));
console.log(stringToInteger("1337c0d3"));