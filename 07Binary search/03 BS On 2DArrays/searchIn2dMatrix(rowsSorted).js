//OPTIMAL APPROACH
//We can enhance this method by adjusting how we move through the matrix. 
//Take a look at the four corners: (0, 0), (0, m-1), (n-1, 0), and (n-1, m-1). 
//By observing these corners, we can identify variations in how we traverse the matrix.

// Observations:

// Cell (0, 0): 
// Assume we are starting traversal from (0, 0) and we are searching for 14. 
// Now, this row and column are both sorted in increasing order. 
// So, we cannot determine, how to move i.e. row-wise or column-wise. That is why, we cannot start traversal from (0, 0).

// Cell (n-1, m-1):
// Assume we are starting traversal from (n-1, m-1) and we are searching for 14. 
//Now, this row and column are both sorted in decreasing order. 
//So, we cannot determine, how to move i.e. row-wise or column-wise. 
//That is why, we cannot start traversal from (n-1, m-1).

// From the above observations, it is quite clear that we should not start the matrix traversal from either the cell (0, 0) or (n-1, m -1).

// SOLUTION - 1
// Cell (0, m-1): Assume we are starting traversal from (0, m-1) and we are searching for 14. 
// Now, in this case, the row is in decreasing order and the column is in increasing order. 
// Therefore, if we start traversal from (0, m-1), in the following way, we can easily determine how we should move.
//       If matrix[0][m-1] > target: We should move row-wise.
//       If matrix[0][m-1] < target: We need bigger elements and so we should move column-wise.
function searchIn2dMatrix(matrix , k){
    let n = matrix.length;
    let m= matrix[0].length;

    let row = 0 ; col = m - 1;
    while(row < n && col >= 0){
        if(matrix[row][col] == k) return true;
        else if(matrix[row][col] > k) col--;
        else row++;
    }
    return false;
}

console.log(searchIn2dMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
] , 6));

// Cell (n-1, 0): 
// Assume we are starting traversal from (n-1, 0) and we are searching for 14. 
// Now, in this case, the row is in increasing order and the column is in decreasing order. Therefore, if we start traversal from (n-1, 0), in the following way,  we can easily determine how we should move.
//      If matrix[n-1][0] < target: We should move row-wise.
//      If matrix[n-1][0] > target: We need smaller elements and so we should move column-wise.
function searchIn2dMatrix_2(matrix , k){
    let n = matrix.length;
    let m= matrix[0].length;

    let row = n - 1 ; col = 0;
    while(row >= 0 && col < m){
        if(matrix[row][col] == k) return true;
        else if(matrix[row][col] > k) row--;
        else col++;
    }
    return false;
}

console.log(searchIn2dMatrix_2([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
] , 6));

// Time Complexity: O(N+M), where N = given row number, M = given column number.
// Reason: We are starting traversal from (0, M-1), and at most, we can end up being in the cell (M-1, 0). 
//So, the total distance can be at most (N+M). So, the time complexity is O(N+M).

// Space Complexity: O(1) as we are not using any extra space.
//BETTER APPROACH
function searchIn2dMatrix_1(matrix , k){
    let n = matrix.length;
    let m= matrix[0].length;

    for(let i = 0 ; i < n ; i++){
        if(binarySearch(matrix[i] , m , k)) return true;
    }
    return false
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
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
] , 6));

// Time Complexity: O(N*logM), where N = given row number, M = given column number.
// Reason: We are traversing all rows and it takes O(N) time complexity. And for all rows, we are applying binary search. So, the total time complexity is O(N*logM).

// Space Complexity: O(1) as we are not using any extra space.