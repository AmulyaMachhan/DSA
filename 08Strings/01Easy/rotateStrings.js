//PROBLEM STATEMENT-
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

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