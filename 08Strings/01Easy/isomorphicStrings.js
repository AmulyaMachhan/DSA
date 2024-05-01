//PROBLEM STATEMENT
//Given two strings s and t, determine if they are isomorphic.
//Two strings s and t are isomorphic if the characters in s can be replaced to get t.
//All occurrences of a character must be replaced with another character while preserving the order of characters. 
//No two characters may map to the same character, but a character may map to itself.

function isIsomorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false; // Strings must have the same length to be isomorphic
    }
    
    const map1 = new Map(); // Map to store mappings from str1 to str2
    const map2 = new Map(); // Map to store mappings from str2 to str1
    
    for (let i = 0; i < str1.length; i++) {
        const char1 = str1[i];
        const char2 = str2[i];
        
        // If the mapping from str1 to str2 is inconsistent
        if (map1.has(char1) && map1.get(char1) !== char2) {
            return false;
        }
        // If the mapping from str2 to str1 is inconsistent
        if (map2.has(char2) && map2.get(char2) !== char1) {
            return false;
        }
        
        // Create mappings from str1 to str2 and from str2 to str1
        map1.set(char1, char2);
        map2.set(char2, char1);
    }
    
    return true; // Strings are isomorphic
}

// Example usage
console.log(isIsomorphic("egg", "add")); // Output: true
console.log(isIsomorphic("foo", "bar")); // Output: false
console.log(isIsomorphic("paper", "title")); // Output: true

function areIsomorphic(str1, str2)
{
    // initializing an object
    // to store letters from str1 and str2
    // as key value pairs
    var charCount = {};
    
    // initially setting c to "a"
    var c = "a";
    
    // iterating over str1 and str2
    for (var i = 0; i < str1.length; i++){
        // if str1[i] is a key in charCount
        if (charCount.hasOwnProperty(str1[i])){
            c = charCount[str1[i]];
            if (c != str2[i]) return false;
        }
        // if str2[i] is not a value in charCount
        else if (!Object.values(charCount).includes(str2[i])){
            charCount[str1[i]] = str2[i];
        }
        
        else return false;
    }
    return true;
}
           
console.log(areIsomorphic("egg", "add")); // Output: true
console.log(areIsomorphic("foo", "bar")); // Output: false
console.log(areIsomorphic("paper", "title")); // Output: true