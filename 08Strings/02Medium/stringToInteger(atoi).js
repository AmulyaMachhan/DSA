//PROBLEM STATEMENT
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Edge case: If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then round the integer to remain in the range. Specifically, integers less than -2^31 should be rounded to -2^31, and integers greater than 2^31 - 1 should be rounded to 2^31 - 1.
// Return the integer as the final result.

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