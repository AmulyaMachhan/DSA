function pattern(n){
    let str = "";
    for(let i = n ; i > 0 ; i--){
        for(let j = i ; j <= n ; j++){
            str += j;
        }
        str += "\n"
    }
    console.log(str);
}

pattern(5);