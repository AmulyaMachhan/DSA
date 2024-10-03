function pattern(n){
    let pattern = "";
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            if(i == 1 || i == n || j == 1 || j == n) pattern += "*";
            else pattern += " ";
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(pattern(5));