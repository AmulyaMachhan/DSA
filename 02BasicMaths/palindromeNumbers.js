function isPalindrome(number){
    let str =number.toString();
    for(let i = 0 ; i < str.length/2 ; i++ ){
        if(str[i] != str[str.length - i - 1]){
            return false;
        }
    }
    return true;
}

function printPalindromeNumbers(n){
    let arr =[];
    for(i = 10 ; i <= n ; i++){
        if(isPalindrome(i)){
            arr.push(i);
        }
    }
    return arr;
}

console.log(printPalindromeNumbers(2000));