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