//PROBLEM STATEMENT
//A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

// Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

// You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

// You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

//OPTIMAL APPROACH
function maxElementForGivenIndex(matrix , column){
    let max = -Infinity;
    let row = -1;
    for(let i = 0 ; i < matrix.length ; i++){
        if(matrix[i][column] > max){
            max = matrix[i][column];
            row = i;
        }
    }
    return row;
}
function peakElement2DMatrix_2(matrix){
    let n = matrix.length;
    let m = matrix[0].length;

    let low = 0 , high = m - 1;
    while(low <= high){
        let mid = Math.floor((high + low)/2);
        let rowIndex = maxElementForGivenIndex(matrix , mid);
        let left = (mid - 1) >= 0 ? matrix[rowIndex][mid - 1] : -1;
        let right = (mid + 1) < m - 1 ? matrix[rowIndex][mid + 1] : -1;
        if(matrix[rowIndex][mid] > left && matrix[rowIndex][mid] > right){
            return [rowIndex , mid];
        }else if(matrix[rowIndex][mid] > left){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1;
}
console.log(peakElement2DMatrix_2([
    [1,2,1],
    [3,4,3],
    [2,1,2],
]));

console.log(peakElement2DMatrix_2([
    [10,20,15],
    [21,30,14],
    [7,16,32],
]));
//BETTER APPROACH
//To find the largest element in the 2D Array
function peakElement2DMatrix_1(matrix){
    let n = matrix.length;
    let m = matrix[0].length;

    let max = -Infinity;
    let ans = [];
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(matrix[i][j] > max){
                max = Math.max(max , matrix[i][j]);
                ans = [i , j];
            }
        }
    }
    return ans;
}
console.log(peakElement2DMatrix_1([
    [1,2,1],
    [3,4,3],
    [2,1,2],
]));

console.log(peakElement2DMatrix_1([[10,20,15],[21,30,14],[7,16,32]]));


//TIME COMPLEXITY = O(N * M)
//This because the inner loop runs m times and outer loop works n times

//SPACE COMPLEXITY = O(1)
//No Extra space is needed

//BRUTE FORCE APPROACH
function peakElement2DMatrix(array){
    let n = array.length;
    let m = array[0].length;

    for(let i = 0 ; i < n ; i++){
        for(let j= 0 ; j < m ; j++){
            let isPeak = true;

            if (i > 0 && array[i][j] <= array[i - 1][j]) {
                isPeak = false;
            }
            if (i < m - 1 && array[i][j] <= array[i + 1][j]) {
                isPeak = false;
            }
            if (j > 0 && array[i][j] <= array[i][j - 1]) {
                isPeak = false;
            }
            if (j < n - 1 && array[i][j] <= array[i][j + 1]) {
                isPeak = false;
            }

            if (isPeak) {
                return [i, j];
            }
        }
    }
}

console.table(peakElement2DMatrix([
    [1,2,1],
    [3,4,3],
    [2,1,2],
]));

console.log(peakElement2DMatrix([[10,20,15],[21,30,14],[7,16,32]]));
// Time Complexity-
//  Best Case = O(1);
//  Worst Case = O(4 * n * m);
//This is because for the worst case the last element is the peak element and to search till there it requires n and m time loop and for each time 4 conditions are checked if the upper , bottom , left and right elements are less.

// Space Complecity = O(1)
// No extra space needed

