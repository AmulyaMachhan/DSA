//PROBLEM STATEMENT-
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
// OPTIMAL APPROACH
function rotatedStrings_2(s1, s2){
    if(s1.length !== s2.length) return true;
    s1 = s1 + s1;
    return s1.includes(s2);
}

console.log(rotatedStrings_2("abcde" , "bcdea"));

// BETTER APPRAOCH
function rotatedStrings_1(s1 , s2){
    if(s1.length !== s2.length) return false;

    let shiftedString = ""
    for(let i = 0 ; i < s1.length ; i++){
        shiftedString = s1.substring(i) + s1.substring(0 , i);
        if(shiftedString == s2) return true;
    }
    return false;
}

console.log(rotatedStrings_1("abcde" , "bcdea"));

// BRUTE FORCE APPROACH
function rotateStrings(s1 , s2){
    
    for(let i = 0 ; i < s1.length ; i++){
        let s = "";
        for(let j = 0 ; j < s1.length; j++){
            let rotatedIndex = (j + i) % s1.length;
            s += s1[rotatedIndex] 
        }

        if(s == s2){
            return true;
        }
    }
    return false;
}

console.log(rotateStrings("abcde" , "bcdea"));

// Time Complexity: O(n×m) n is the length of s1 and m is the length of s2.
// The function has a nested loop structure, where the outer loop iterates over the length of s1, and the inner loop iterates over the length of s2. 
// Therefore, the time complexity is proportional to the product of the lengths of s1 and s2.

// Space Complexity: O(m)
// We are creating a new string s with a length equal to the length of s2 in each iteration of the outer loop. 
// Therefore, the space complexity is proportional to the length of s2.