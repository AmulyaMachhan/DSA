!function pattern(n){
    let pattern = "";
    for(let i = 0 ; i < n ; i++){
        let space = 0;
        for(space = 0 ; space < i%3 ;  space++){
            pattern += " ";
        }
        for(space = i%3 ; space < i%6 ; space--){
            pattern += " ";
        }
        pattern += "*";
        pattern += "\n";
    }
    console.log(pattern);
}(10);
