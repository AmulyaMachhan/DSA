function zeroMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    let col0 = 1;
    // Step 1: Traverse the matrix and mark 1st row & col accordingly:
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                // Mark i-th row:
                matrix[i][0] = 0;

                // Mark j-th column:
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] !== 0) {
                // Check for col & row:
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // Step 3: Finally mark the 1st col & then 1st row:
    if (matrix[0][0] === 0) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0 === 0) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
const ans = zeroMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}  


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