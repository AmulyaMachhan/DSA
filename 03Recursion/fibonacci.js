function fibonacci(n){
    if( n == 0){
        return 0;
    }
    else if( n == 1){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci (n -2);
};
console.log(fibonacci(9))

//Parametrized form
function fibonacci1(n , currentTerm = 0, nextTerm = 1) {
    if (n > 0) {
        console.log(currentTerm);
        fibonacci1(n - 1, nextTerm, currentTerm + nextTerm);
    }
}

fibonacci1(5);
