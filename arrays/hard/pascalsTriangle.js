//Variation-3
//Printing the whole pascal triangle
function pascalsTriangle(number){
    let pattern = ""
    let array = [];
    for(let i = 1 ; i <= number ; i++){
        array[i] = []
        for(let j = 1; j <= i ; j++ ){
            if(j == 1 || j == i ){
                array[i][j] = 1;
                pattern += "1";
            }else{
                array[i][j] = array[i-1][j-1] + array[i-1][j];
                pattern += array[i][j]; 
            }
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(pascalsTriangle(5));

// Variation-1
// Given row number r and column number c, print the element at position (r,c) in pascal's triangle
function pascalsTriangle(number , row , column){
    const array = [];
    for(let i = 1 ; i <= row ; i++){
        array[i] = [];
        for(let j = 1 ; j <= i; j++){
            if(j==1 || j == i){
                array[i][j] = 1;
                
            }
        }
    }
}