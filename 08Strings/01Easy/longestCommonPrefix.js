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
        if(strings[0][i] === strings[m - 1][i]){
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