//PROBLEM STATEMENT
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

//OPTIMAL APPROACH 
function romanNumberToInteger_1(s){
    let object = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    let ans = 0;
    for(let i = 0 ; i < s.length ; i++){
        if(object[s[i]] < object[s[i + 1]]){
            ans += (object[s[i + 1]] - object[s[i]]);
            i++;
        }
        else ans += object[s[i]];
    }
    return ans;
}

console.log(romanNumberToInteger_1("III"));
console.log(romanNumberToInteger_1("LVIII"));
console.log(romanNumberToInteger_1("MCMXCIV"));

// Time complexity: O(n), where n is the length of the input string s. 
// We iterate through each character of the string once.

// Space complexity: O(1). 
// The space used is constant, as we only use a fixed-size object (object) to store the mapping of Roman numerals to integers, regardless of the size of the input string.

//BRUTE FORCE APPROACH
function romanNumberToInteger(s){
    let object = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    let ans = 0;
    for(let i = s.length - 1 ; i >= 0 ; i--){
        if((s[i] == "V" || s[i] == "X") && s[i - 1] ==  "I"){
            ans += object[s[i]] - 1;
            i--;
        }
        else if((s[i] == "L" || s[i] == "C") && s[i - 1] ==  "X"){
            ans += object[s[i]] - 10;
            i--;
        }
        else if((s[i] == "D" || s[i] == "M") && s[i - 1] ==  "C"){
            ans += object[s[i]] - 100;
            i--;
        }
        else ans += object[s[i]];
    }
    return ans;
}

console.log(romanNumberToInteger("III"));
console.log(romanNumberToInteger("LVIII"));
console.log(romanNumberToInteger("MCMXCIV"));

// Time complexity: O(n), where n is the length of the input string. 
// The function iterates through each character of the input string once.

// Space complexity: O(1). 
// The space used by the function is constant, as it only uses a fixed-size object (object) to store the mapping of Roman numerals to integers, regardless of the size of the input string.