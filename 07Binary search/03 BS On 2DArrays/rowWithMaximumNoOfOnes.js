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