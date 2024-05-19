//PROBLEM STATEMENT
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest 
// palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

//OPTIMAL APPROACH
function longestPalindrome(str){
    // TO STORE FREQUENCY OF CHARACTERS OF STR
    let map = new Map();
    for(let i = 0 ; i < str.length ; i++){
        if(map.has(str[i])) map.set(str[i] , map.get(str[i]) + 1);
        else map.set(str[i], 1)
    }

    let length = 0;

    //To check if there is an odd frequency in the map
    let oddfrequency = false;
    for(let freq of map.values()){

        //For even frequencies just add the frequency to the length
        if((freq % 2) == 0){
            length += freq;
        }else{
        //For odd frequency greater than 1 , consider the even number of characters in to find the max length
            length += freq - 1;
            oddfrequency = true;
        }
    }

    if(oddfrequency) length++;
    return length;
}
console.log(longestPalindrome("abccccdd"));

//Another Approach
function longestPalindrome_1(str){
    let n = s.length;
    let length = 0;
    let set = new Set();
    for(i = 0 ; i < n ; i++){
        if(set.has(s[i])){
            length += 2;
            set.delete(s[i]);
        }else{
            set.add(s[i]);
        }
    }

    return length + ((set.size > 0) ? 1 : 0);
}

console.log(longestPalindrome("abccccdd")); 
console.log(longestPalindrome("abcccccccdd")); 