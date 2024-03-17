pattern(5);

function pattern(n){
    let pattern = "";

    for(let i=1 ; i<=n ; i++){
        
        for(let space=1 ; space<= n-i ; space++){
            pattern += " " ;
        }
        
        for(let j=1 ; j<=2*i-1; j++){
            pattern += "*";
        }
    pattern+="\n";
    }

    for(let i=1 ; i<= n; i++){

        for(let space=1 ; space<= i; space++){
            pattern  +=" ";
        }
        for(let j=2*n-2*i-1; j>= 1;j--){
            pattern +="*";
        }
    pattern += "\n";
    }
console.log(pattern);
}

//     *
//    ***
//   *****
//  *******
// *********
//  ******* 
//   *****
//    ***
//     *