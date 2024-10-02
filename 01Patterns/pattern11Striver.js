function pattern(n){
    let pattern = "";
    for(let i = 1; i <= n; i++){
        let start; 
        if(i % 2 === 0)start = 1;
        else start = 0;

        for(let j = 1; j <= i; j++){
            start = 1 - start;
            pattern += start;
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(pattern(5));