//OPTIMAL APPROACH
function medianOfRowWiseSortedArray_2(matrix){
    let r = matrix.length;
    let c = matrix[0].length;
    
    let low = 1, high = 10^9;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);
        let count = 0
        for(let i = 0 ; i < r ; i++){
            count += countOfElementsSmallerThanMid(matrix[i] , c , mid);
        }

        if(count <= ((r * c)/2)){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return low;
}

function countOfElementsSmallerThanMid( array , size , element){
    let low= 0 ; high = size -1;
    while(low <= high){
        let mid = Math.floor((low + high)/ 2);
        if(array[mid] <= element){
            low = mid + 1; 
        }else{
            high = mid - 1;
        }
    }
    return low;
}

console.log(medianOfRowWiseSortedArray_2([
    [2, 3, 4],
    [1, 3, 8],
    [1, 2, 5]
]));

//BRUTE FORCE APPROACH
function medianOfRowWiseSortedArray_1(matrix){
    let r = matrix.length;
    let c = matrix[0].length;
    let median = [];

    for(let i = 0 ; i < r ; i++){
        for(let j = 0 ; j < c ; j++){
            median.push(matrix[i][j]);
        }
    }
    console.log(median);
    return median[((r * c - 1))/2];
}

console.log(medianOfRowWiseSortedArray_1([
    [2, 3, 4],
    [1, 3, 8],
    [1, 2, 5]
]));

// Time Complexity: O(row*col log(row*col)) for sorting the array where r*c denotes the number of elements in the linear array.

// Space Complexity: O(row*col)  for storing elements in the linear array

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