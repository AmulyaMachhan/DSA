function setMatrixZero_2(matrix){
    let col0 = 1;
    let n = matrix.length;
    let m = matrix[0].length;
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0;

                if(j !== 0){
                    matrix[0][j] = 0;
                }else{
                    col0= 0;
                }
            }
        }
    }

    for(let i = 1 ; i < n ; i++){
        for(let  j = 1 ; j < m ; j++){
            if(matrix[i][j] !== 0){
                if(matrix[i][0]  === 0 || matrix[0][j] === 0){
                    matrix[i][j] = 0;
                }
            }
        }
    }

    if(matrix[0][0] === 0){
        for(let  j= 0 ; j < m ; j++){
            matrix[0][j] = 0;
        }
    }

    if(col0 === 0){
        for(let i = 0 ; i  <  n ; i++){
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

console.table(setMatrixZero_2([
    [1,1,1,1],
    [1,0,1,1],
    [1,1,0,1],
    [0,1,1,1]
]))

function setMatrixZero(twoDArray){
    let row , column;
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

  
function setMatrixZero_1(array){
    let rows = array.length; 
    let cols = array[0].length;

    const zeroRows = new Array(rows).fill(false);
    const zeroCols = new Array(cols).fill(false);
    
    for(let  i = 0 ; i < rows ; i++){
        for(let  j = 0 ; j < cols ; j++){
            if(array[i][j] === 0){
                zeroRows[i] = true;
                zeroCols[j] = true;
            }
        }
    }

    for(let  i = 0 ; i < rows ; i++){
        for(let  j = 0 ; j < cols ; j++){
            if(zeroRows[i] || zeroCols[j]){
                array[i][j] = 0;
            }            
        }
    }
 
    return array;
}
console.table(setMatrixZero_1([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]));

console.table(setMatrixZero_1([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]));