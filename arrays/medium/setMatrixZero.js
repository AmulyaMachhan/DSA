function setMatrixZero(twoDArray){
    let row, column;
    for(let i = 0 ; i < twoDArray.length ; i++){
        for(let j = 0 ; j <twoDArray[0].length ; j++){
            if(twoDArray[i][j] == 0){
                row = i ;
                column = j;
            }
        }
    }
    for(let i = 0 ; i < twoDArray.length ; i++){
        for(let j = 0 ; j <twoDArray[0].length ; j++){
            twoDArray[row][j] = 0;
            twoDArray[i][column] = 0;
        }
    }

    return twoDArray;
}
console.table(setMatrixZero([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]))