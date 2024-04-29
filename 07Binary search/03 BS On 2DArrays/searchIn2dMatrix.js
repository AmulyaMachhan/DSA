//Problem Statement: 
//You have been given a 2-D array 'mat' of size 'N x M' .
//The elements of each row are sorted in non-decreasing order. 
//Moreover, the first element of a row is greater than the last element of the previous row (if it exists). 
//You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.

//OPTIMAL APPROACH
//By converting 1D array index to the corresponding cell of the 2D matrix
// If index = i, and no. of columns in the matrix = m, the index i corresponds to the cell with
// row = i / m and col = i % m. More formally, the cell is (i / m, i % m)(0-based indexing).
function searchIn2dMatrix_2(matrix , k){
    let n = matrix.length;
    let m= matrix[0].length;

    let low = 0;
    let high = (n * m) - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m

        if(matrix[row][col] === k) return true;
        else if(matrix[row][col] < k) low = mid + 1;
        else high = mid - 1;
    }

    return true;
}
console.log(searchIn2dMatrix_2([
    [1,  2 , 3,  4],
    [5,  6 , 7,  8],
    [9, 10, 11, 12]
] , 6));

// Time Complexity: O(log(NxM)), where N = given row number, M = given column number.
// Reason: We are applying binary search on the imaginary 1D array of size NxM.

// Space Complexity: O(1) as we are not using any extra space.

//BETTER APPROACH
//Using binary search on only the row where the target is present because the rows are sorted ;
function searchIn2dMatrix_1(matrix , k){
    let n = matrix.length;
    let m= matrix[0].length;

    for(let i = 0 ; i < n ; i++){
        if(matrix[i][0] <= k && k <= matrix[i][m - 1]){
            return binarySearch(matrix[i] , m , k)
        }
    }
    return false;
}
function binarySearch(array , m , k){
    let low = 0 , high = m - 1;
    while(low <= high){
        let mid = Math.floor((low + high)/ 2);
        if(array[mid] == k) return true;
        else if(array[mid] < k) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}
console.log(searchIn2dMatrix_1([
    [1,  2 , 3,  4],
    [5,  6 , 7,  8],
    [9, 10, 11, 12]
] , 6));

// Time Complexity: O(N + logM), where N = given row number, M = given column number.
// Reason: We are traversing all rows and it takes O(N) time complexity. But for all rows, we are not applying binary search rather we are only applying it once for a particular row. That is why the time complexity is O(N + logM) instead of O(N*logM).

// Space Complexity: O(1) as we are not using any extra space.

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
] , 6));

//Time Complexity: O(N X M), where N = given row number, M = given column number.
//Reason: In order to traverse the matrix, we are using nested loops running for n and m times respectively.

//Space Complexity: O(1) as we are not using any extra space.