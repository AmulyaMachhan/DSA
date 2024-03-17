!function fibonacci(n){
    let result = [];
    for(i = 0 ; i<=n ; i++){
        if(i == 0){
            result[0] = 0
        }
        else if( i == 1){
            result[1] = 1;
        }
        else{
            result[i] = (result[i-1]) + (result[i-2]);
        }
    }
    console.log(result);
}(6);

//optimized approach of taking two variables
!function fibonacci1(n = 5){   
    let secondLast = 0;
    let last = 1;
    let curr = 0;
    console.log(secondLast);
    console.log(last);
    for(let i = 2 ; i <= n ; i++){
        curr = last + secondLast;
        secondLast = last;
        last = curr;
        console.log(curr);
    }
}();