function subArraySumDivisibleByK(array , k){
    let n = array.length;
    let map = new Map();

    map.set(0 , 1);
    let count = 0;
    let sum = 0;
    for(let i = 0 ; i < n ; i++){
        sum += array[i];
    
        let div = sum % k;
        if(div < 0) div += k;
        if(map.has(div)){
            count += map.get(div)
            map.set(div ,map.get(div) + 1);
        }
        else map.set(div, 1);
    }
    return count
}

console.log(subArraySumDivisibleByK([4,5,0,-2,-3,1] , 5))