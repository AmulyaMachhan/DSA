// PROBLEM STATEMENT
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:
// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

// OPTIMAL APPROACH
function myPow_1(x , n){
    if(n === 0) return 1;

    if(n < 0){
        x = 1/x;
        n = -n;
    }

    if(n % 2 == 0){
        return myPow(x * x ,n / 2)
    }else{
        return x * myPow(x * x , Math.floor(n /2));
    }
}

console.log(myPow_1(2 , 10));

// BRUTE FORCE APPROACH
function myPow(x , n){
    if(n == 0) return 1;
    else if(n > 0) return x * myPow( x, n - 1);
    else return (1/x) * myPow(x , n + 1)
}

console.log(myPow(2 , 10));