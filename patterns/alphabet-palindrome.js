pattern(5);

function pattern(n){
    let num = 1;
    let pattern = "";
    let a= 64;

    for(let i = 1; i<= n; i++){

        for( let j= 1; j<=i; j++){
            pattern += String.fromCharCode(a+j); 
         }

         for( let j=i-1 ; j>=1 ; j--){
            pattern += String.fromCharCode(a+j);
         }
        pattern += "\n";
    }
    console.log(pattern);
}
// A
// ABA
// ABCBA
// ABCDCBA
// ABCDEDCBA
