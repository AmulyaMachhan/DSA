function countGoodNumbers(n){
    let MOD = BigInt(10**9 + 7);
    n = BigInt(n);

    let evenPositions = n / 2n; 
    let oddPositions = (n + 1n ) / 2n;


    function modPow(base , exp , MOD){
        if(exp === 0n) return 1n;

        if(exp % 2n === 0n){
            const half = modPow(base , exp/2n , MOD);
            return (half * half) % MOD;
        }else{
            return (base * modPow(base, exp - 1n, MOD)) % MOD;
        }
    }

    let countEvenNumbers = modPow(5n , evenPositions, MOD);
    let countOddNumbers = modPow(4n , oddPositions, MOD);

    return Number((countEvenNumbers * countOddNumbers) % MOD);
}

console.log(countGoodNumbers(4));
console.log(countGoodNumbers(50));

