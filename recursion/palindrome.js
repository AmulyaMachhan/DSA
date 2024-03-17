function isPalindrome(str , i , j){
    if( i >= Math.floor(j/2)){
        return true;
    }
    else if(str[i] !== str[j]){
            return false;
    }
    return isPalindrome(str , ++i , --j);
}
console.log(isPalindrome("1234567" , 0 , 6));
console.log(isPalindrome("1234321" , 0 , 6));