//BRUTE FORCE APPROACH
function searchIn2dMatrix(matrix , k ){
    let n = matrix.length;
    let m= matrix[0].length;

    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(matrix[i][j] === k ) return true;
        }
    }

    return false;
}

console.log(searchIn2dMatrix([
    [1,  2 , 3,  4],
    [5,  6 , 7,  8],
    [9, 10, 11, 12]
]));

//Time Complexity: O(N X M), where N = given row number, M = given column number.
//Reason: In order to traverse the matrix, we are using nested loops running for n and m times respectively.

//Space Complexity: O(1) as we are not using any extra space.