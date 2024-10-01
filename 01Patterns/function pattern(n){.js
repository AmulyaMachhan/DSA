function pattern(n){
    let pattern = "";
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            pattern +=  n - j + 1
        }
        for(let k = 1; k <= 2*n - 2*i  ; k++){
            pattern += n - i + 1
        }
        for(let j = 2; j <= i; j++){
            pattern += n - i + j
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(pattern(4));