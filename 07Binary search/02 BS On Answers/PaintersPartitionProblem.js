function paintersPartitionProblem(boards , noOfPainters){
    let n = boards.length;

    let minTime = Math.max(...boards);
    let maxTime = boards.reduce((acc , elem) => acc + elem , 0);

    for(let time = minTime ; time <= maxTime ; time++){
        if(noOfPaintersRequiredForGivenTime(boards , n , time) === noOfPainters){
            return time;
        }
    }

    return minTime;
}

function noOfPaintersRequiredForGivenTime(boards , n , time){
    let calcultedTime = 0;
    let painters = 1;
    for(let i = 0 ; i < n ; i++){
        if(calcultedTime + boards[i] <= time){
            calcultedTime += boards[i];
        }else{
            painters++;
            calcultedTime= boards[i];
        }
    }
    return painters;
}

console.log(paintersPartitionProblem([5, 5, 5, 5] , 2));
console.log(paintersPartitionProblem([10, 20, 30, 40] , 2));