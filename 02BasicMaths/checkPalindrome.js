function isPalindrome(number){
    let reverseNumber = Number.parseInt(number.toString().split("").reverse().join(""));
    if(number == reverseNumber){
        return true;
    }
    return false;
}

console.log(isPalindrome(12334354));
console.log(isPalindrome(1234321));

function isPalindrome1(number){
    let str =number.toString();
    for(let i = 0 ; i < str.length/2 ; i++ ){
        if(str[i] != str[str.length - i - 1]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome1(12334354));
console.log(isPalindrome1(1234321));