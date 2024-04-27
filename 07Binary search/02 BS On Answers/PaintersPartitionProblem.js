//PROBLEM STATEMENT :
//Given an array/list of length ‘N’, where the array/list represents the boards and each element of the given array/list represents the length of each board. 
//Some ‘K’ numbers of painters are available to paint these boards. 
//Consider that each unit of a board takes 1 unit of time to paint. 
//You are supposed to return the area of the minimum time to get this job done of painting all the ‘N’ boards under the constraint that any painter will only paint the continuous sections of boards.


//BRUTE FORCE APPROACH
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

//Time Complexity: O(N * (sum(arr[])-max(arr[])+1)), where N = size of the array, sum(arr[]) = sum of all array elements, max(arr[]) = maximum of all array elements.
//Reason: We are using a loop from max(arr[]) to sum(arr[]) to check all possible values of time. 
//Inside the loop, we are calling the noOfPaintersRequiredForGivenTime() function for each number. 
//Now, inside the noOfPaintersRequiredForGivenTime() function, we are using a loop that runs for N times.
