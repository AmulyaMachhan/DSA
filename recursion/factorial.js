//Functional Recursion
function factorial(number){
    if( number == 0 || number == 1){
        return 1;
    }
    return number * factorial(number - 1);
}
console.log(factorial(5));

//Parametrized Recursion
function factorial1(number , fact){
    if(number == 0 || number == 1){
        console.log(fact);
        return ;
    }
    factorial1(number - 1 , fact * number);
}
factorial1(4 , 1);