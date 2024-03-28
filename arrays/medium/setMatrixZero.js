//OPTIMAL APPROACH 
//Here the space complexity is reduced to almost constant
//Time complexity = o(n^2)
//First, we will traverse the matrix and mark the proper cells of 1st row and 1st column with 0 accordingly. The marking will be like this: if cell(i, j) contains 0, we will mark the i-th row i.e. matrix[i][0] with 0 and we will mark j-th column i.e. matrix[0][j] with 0.
//If i is 0, we will mark matrix[0][0] with 0 but if j is 0, we will mark the col0 variable with 0 instead of marking matrix[0][0] again.
//After step 1 is completed, we will modify the cells from (1,1) to (n-1, m-1) using the values from the 1st row, 1st column, and col0 variable.
//We will not modify the 1st row and 1st column of the matrix here as the modification of the rest of the matrix(i.e. From (1,1) to (n-1, m-1)) is dependent on that row and column.
//Finally, we will change the 1st row and column using the values from matrix[0][0] and col0 variable. Here also we will change the row first and then the column.
//If matrix[0][0] = 0, we will change all the elements from the cell (0,1) to (0, m-1), to 0.
//If col0 = 0, we will change all the elements from the cell (0,0) to (n-1, 0), to 0.
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