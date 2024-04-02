function myPow(x , n){
    if(n == 0) return 1;
    else if(n > 0) return x * myPow( x, n - 1);
    else return (1/x) * myPow(x , n + 1)
}

console.log(myPow(2 , 10));