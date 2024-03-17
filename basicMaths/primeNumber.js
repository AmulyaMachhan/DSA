(function primeNumbers(n) {
    const arr = [];

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            arr.push(i);
        }
    }

    console.log(arr);
})(100);

//another approach
function isPrime(number){
    if(number==0 || number==1){
        return false
    }
    for(let  i=2 ; i < number ; i++){
        if(number%i == 0){
            return false;
        }
    }
    return true;
}

function primeNumbers2(n){
    let arr2 =[]
    for(let j=2 ; j<=n; j++){
        if(isPrime(j)){
            arr2.push(j);
        }
    }
    return arr2;
}

console.log(primeNumbers2(200));

//yet another approach
//running the loop for square root of that number 
function isPrime(number){
    if(number==0 || number==1){
        return false
    }
    for(let  i=2 ; i <= Math.sqrt(number) ; i++){
        if(number%i == 0){
            return false;
        }
    }
    return true;
}

function primeNumbers2(n){
    let arr2 =[]
    for(let j=2 ; j<=n; j++){
        if(isPrime(j)){
            arr2.push(j);
        }
    }
    return arr2;
}

console.log(primeNumbers2(10));