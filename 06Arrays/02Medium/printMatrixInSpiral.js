function printMatrixInSpiral_2(matrix) {
    let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            console.log(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            console.log(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                console.log(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                console.log(matrix[i][left]);
            }
            left++;
        }
    }
}

printMatrixInSpiral_2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]);

function printMatrixInSpiral_1(matrix) {

    let array = [];

    let  top = 0 ; left = 0 ; right = matrix.length-1 ; bottom = matrix[0].length-1;

    while(top <= bottom && left <= right){
        for(let i = left ; i <= right ; i++){
            array.push(matrix[top][i]);
        }
        top++;
        for(let i = top ; i <= bottom ; i++){
            array.push(matrix[i][right]);
        }
        right--;
        if( top <= bottom){
            for(let i = right ; i >= left ; i--){
                array.push(matrix[top][i]);
            }
            bottom--;
        }
        if( left <= right){
            for(let i = bottom ; i >= top ; i--){
                array.push(matrix[i][left]);
            }
            left++;
        }
    }
    return array;
};


console.table(printMatrixInSpiral_1([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]))

function printMatrixInSpiral(matrix){
    let n = matrix.length;
    let m = matrix[0].length;

    let top = 0; left = 0 ; right = m -1 ; bottom = n - 1;
    while(top <= bottom && left <= right){
        for(let i = left ; i <= right ; i++){
            console.log(matrix[top][i]);
        }
        top++;

        for(let i= top ; i <= bottom ; i++){
            console.log(matrix[i][right]);
        }
        right--;

        if(top <= bottom){
            for(let i = right ; i>= left ; i--){
                console.log(matrix[bottom][i]);
            }
            bottom--;
        }

        if(left <= right){
            for(let i = bottom ; i>= top ; i--){
                console.log(matrix[i][left]);
            }
            left++;
        }
    }
};

console.table(printMatrixInSpiral([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]));