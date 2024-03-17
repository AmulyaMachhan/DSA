// 1      1
// 12    21
// 123  321
// 12344321
!function(n){
    let pattern = "";
    for(let i = 1 ; i<=n ; i++){

        for(let j= 1 ; j <= i ; j++){
            pattern += j;
        }
        for(let star = 1 ; star <= n*2 - i*2; star++){
            pattern +=" ";
        }
        for(let j= i ; j >= 1 ; j--){
            pattern += j;
        }
        pattern += "\n";
    }
    console.log(pattern);
}(4);