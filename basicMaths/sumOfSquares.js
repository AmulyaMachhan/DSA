!function sumOfSquares(n){
    let sum = 0
    for(let i = 1 ; i<= n ; i++){
        sum += i*i;
    }
    console.log(sum);
}(5);

!function sumOfSquares(n){
    let sum = 0
    for(let i = 1 ; i<= n ; i++){
        sum += Math.pow(i,2);
    }
    console.log(sum);
}(5);
