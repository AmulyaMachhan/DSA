function pattern(n){
    let str = "";
    for(let i = 0 ; i < n ; i++){
        let count = n - i;
        for(let j = 0 ; j <= i ; j++){
            str += count;
            count++;
        }
        str += "\n"
    }
    console.log(str);
}

pattern(5);