//Functional Recursion
function sumOfNumbers(n){
    if( n  == 1){
        return 1;
    }
    return n + sumOfNumbers(n-1);
};
console.log(sumOfNumbers(5));

//Parameterised Recursion 
function sumOfNumbers1( i , sum){
    if( i < 0){
        console.log(sum);
        return ;
    }
    sumOfNumbers1(i - 1 , sum + i );
}
sumOfNumbers1(10 , 0);