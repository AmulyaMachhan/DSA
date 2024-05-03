// PROBLEM STATEMENT
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

// Example 2:
// Input: c = 3
// Output: false
 
// Constraints:
// 0 <= c <= 231 - 1

// OPTIMAL APPROACH
function sumofSquaresOfANumber_1(number){
    let low = 0, high = number;

    while(low <= high){
        let square = Math.pow(low ,2) + Math.pow(high ,2);

        if(square < number)low++;
        else if(square > number) high--;
        else return true;
    }
    console.log([low , high]);
    return false;
}

console.log(sumofSquaresOfANumber_1(5));
console.log(sumofSquaresOfANumber_1(3));
console.log(sumofSquaresOfANumber_1(5));
console.log(sumofSquaresOfANumber_1(1000000000));