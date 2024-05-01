function largestOddNumber(string){
    let res = ""
    for(let i = string.length - 1 ; i >= 0 ; i--){
        if(string[i] % 2 === 1){
            res = string.substring(0 , i+1);
            break;
        }
    }
    return res;
}

console.log(largestOddNumber("4206"));
console.log(largestOddNumber("3247"));
console.log(largestOddNumber("52"));