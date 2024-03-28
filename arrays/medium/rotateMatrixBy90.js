//OPTIMAL APPROACH
//TIME COMPLEXITY = O(N^2)
//SPACE COMPLEXITY = O(1)
function rotateMatrixBy90(matrix){
    for(let i = 0; i < matrix.length ; i++ ){
        for(let j=i ; j < matrix[0].length ; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let i = 0; i < matrix.length ; i++ ){
        for(let j=0 ; j < matrix[0].length/2 ; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[0].length - 1 - j];
            matrix[i][matrix[0].length - 1 -j] = temp;
        }
    }
    return matrix;
}

console.table(rotateMatrixBy90([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));

//BRUTE FORCE APPROACH 
function rotateMatrixBy90_1(matrix){
    const rotated = new Array(matrix.length).fill().map( ()=> Array(matrix[0].length).fill(0));

    for(let i = 0 ; i < matrix.length ; i++){
        for(let  j  = 0 ; j < matrix[0].length ; j++){
            rotated[j][matrix.length - i - 1] = matrix[i][j];
        }
    }
    return rotated;
}
console.table(rotateMatrixBy90_1([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))