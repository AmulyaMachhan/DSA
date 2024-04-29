//OPTIMAL APPROACH
function rowWithMaximumNoOfOnes_1(matrix){
    let r = matrix.length;
    let c = matrix[0].length;
    let maxCount = 0;
    let index = -1;

    for(let i = 0 ; i < r ; i++){
        let cnt = c - lowerBound(matrix[i] , c , 1);
        if(cnt > maxCount){
            maxCount = cnt;
            index = i;
        }
    }

    return index;
}

function lowerBound( array , size , k){
    let low = 0;
    let high = size - 1;
    let ans = 0;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);

        if(array[mid] >= k) {
            ans = mid;
            high = mid - 1;
        }
        else low = mid + 1;
    }
    return  `Row with max ones is ${index + 1}`;
}

console.log(rowWithMaximumNoOfOnes_1([
    [1,1,1],
    [0,0,1],
    [0,0,0]
]))

//Time Complexity: O(r X logc), where r = given row number, c = given column number.
//Reason: We are using a loop running for n times to traverse the rows. Then we are applying binary search on each row with m columns.

//Space Complexity: O(1) as we are not using any extra space.

//BRUTE FORCE APPROACH
function rowWithMaximumNoOfOnes(matrix){
    let r = matrix.length;
    let c = matrix[0].length;
    let maxCount = 0;
    let index = -1;
    for(let i = 0 ; i < r ; i++){
        let cnt = 0;
        for(let j = 0 ; j < c ; j++){
            if(matrix[i][j] == 1){
                cnt++;
            }
        }
        if(cnt > maxCount){
            maxCount = cnt;
            index = i;
        }
    }

    return `Row with max ones is ${index + 1}`;
}

console.log(rowWithMaximumNoOfOnes([
    [1,1,1],
    [0,0,1],
    [0,0,0]
]))

//TIME COMPLEXITY : O(r * c) r = no of rows , c = no. of columns

//SPACE COMPLEXITY : O(1)