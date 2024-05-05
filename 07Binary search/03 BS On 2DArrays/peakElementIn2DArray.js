//PROBLEM STATEMENT
//A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

// Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

// You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

// You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

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

