// 1
// 01
// 101
// 0101
// 10101
// 010101
// 1010101
!function binaryPattern(n){

    let pattern = "";
    for(let i=1; i <= n ; i++){
        for(let j=1 ; j <= i ; j++){
            if( j%2 == i%2){
                pattern += "1";
            }
            else{
                pattern += "0";
            }               
        }
        pattern += "\n";
    }

    console.log(pattern);
}(7);

!function binaryPattern(n){

    let pattern = "";
    for(let i=1; i <= n ; i++){
        let start;
        if(i%2){
            start = 1;
        }else{
            start = 0;
        }
        for(let j=1 ; j <= i ; j++){
                pattern += start;
                start = 1 - start;            
        }
        pattern += "\n";
    }

    console.log(pattern);
}(7);


 