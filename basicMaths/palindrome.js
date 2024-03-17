// for finding if a given number is a palindrome or not
function isPalindrome( num ){

    const numArr = num.toString().split("");

    for(let i=0; i<(numArr.length)/2; i++){

        if(numArr[i] != numArr[numArr.length - i - 1]){
            return false;
        }
        return true;
    }
}
console.log(isPalindrome(12345678));
console.log(isPalindrome(123454321));