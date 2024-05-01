function largestOddNumber(string){
    for(let i = string.length - 1 ; i >= 0 ; i--){
        if(string[i] % 2 === 1){
            return string.substring(0 , i+1);
        }
    }
    return "";
}

console.log(largestOddNumber("4206"));
console.log(largestOddNumber("3247"));
console.log(largestOddNumber("52"));