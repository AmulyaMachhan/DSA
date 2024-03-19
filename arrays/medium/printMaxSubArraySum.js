function printMaxSubArraySum(array){
    let max = -Infinity;
    let sum = 0;
    let start = 0;
    let startIndex = 0;
    let endIndex = array.length;
    for(let i=0 ; i < array.length ; i++){

        if(sum == 0){
            start = i;
        }
        sum += array[i]

        if(sum > max){
            max = sum;
            startIndex = start;
            endIndex = i
        }

        if(sum < 0){
            sum = 0;
        }
    }
    console.log(startIndex , endIndex);
    const subArray = array.slice(startIndex , endIndex + 1);
    console.log(subArray);
    return max ;
}
console.log(printMaxSubArraySum([-2,1,-3,4,-1,2,1,-5,4]))