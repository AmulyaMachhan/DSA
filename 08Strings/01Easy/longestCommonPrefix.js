//OPTIMAL APPROACH
//Horizontal scanning
function longestCommonPrefix(strings){
    let m = strings.length;
    if(m == 0) return "";
    if(m == 1) return strings[0];

    strings.sort();
    let res = '';

    let n = strings[0].length;
    for(let i = 0 ; i < n ; i++){
        if(strings[0][i] === strings[m-1][i]){
            res += strings[0][i];
        }else {
            break;
        }
    }
    return res;
}
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));

//BETTER APPRAOCH
//Using Binary Search
function longestCommonPrefix_1(strings){
    let n = strings.length;
    let min = Infinity;
    for(let i = 0 ; i < n ; i++){
        min = Math.min(strings[i].length , min);
    }

    let low = 0;
    let high = min - 1;

    while(low <= high){
        let mid = Math.floor((high + low)/2);
        let allEqual = true;
        for(const s of strings){
            if(s.slice(0 , mid + 1) != strings[0].slice(0 , mid + 1)){
                allEqual = false;
                break;
            }
        }
        if(allEqual){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    
    return strings[0].slice(0 , low);
}
console.log(longestCommonPrefix_1(["flower","flow","flight"]));
console.log(longestCommonPrefix_1(["dog","racecar","car"]));

// Time Complexity:
// Finding the length of the shortest string: O(n), where n is the number of strings in the array.
// Binary search for the longest common prefix: O(log m), where m is the length of the shortest string.
// Overall, the time complexity is O(n log m).

// Space Complexity:
// Space required for variables and the output string: O(1), as the space usage does not depend on the input size.
// Additional space used during execution: O(1), as the algorithm does not use additional data structures.
// Overall, the space complexity is O(1).

