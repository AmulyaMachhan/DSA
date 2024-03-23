function leadersProblem(array){
    const result = [];
    let max = array[array.length -1];
    result.push(max);
    for(let i = array.length - 2; i >= 0 ; i--){
        if(array[i] > max){
            result.push(array[i]);
            max = array[i];
        }
    }
    return result;
}
console.log(leadersProblem([4,7,1,0]))