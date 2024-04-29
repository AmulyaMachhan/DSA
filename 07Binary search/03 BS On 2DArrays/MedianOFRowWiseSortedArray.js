//Practical approach
//if rows * columns is odd
function medianOfRowWiseSortedArray(matrix ){
    let r = matrix.length;
    let c = matrix[0].length;

    let m = (r*c - 1)/2

    let row = Math.floor(m /c);
    let col = m %  c;
     return matrix[row][col];
}

console.log(medianOfRowWiseSortedArray([
    [2, 3, 4],
    [1, 3, 8],
    [1, 2, 5]
]))