//OPTIMAL APPROACH
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