function closestElementToNumber(arr , number){

    for(let i = 0 ;i<arr.length ; i++){
        arr[i] = Math.abs(arr[i] - number);
    }
    console.log(arr);
    let min =Math.min.apply(Infinity , arr);
    return arr.indexOf(min)      
}

console.log(closestElementToNumber([1,2,3,4,6,7,8,9,10] , 5))   