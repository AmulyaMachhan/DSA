//OPTIMAL APPROACH
function removeOutermostParanthesis(string){
    let count = 0;
    let res = "";

    for(let i = 0 ; i < string.length ; i++){
        if(string[i] == "(" && count++ > 0){
            res += string[i];
        }

        if(string[i] == ")" && count-- > 1){
            res += string[i];
        }
    }

    return res;
}

console.log(removeOutermostParanthesis("(()())(())"));
console.log(removeOutermostParanthesis("(()())(())(()(()))"));

//BRUTE FORCE APPROACH
fucn