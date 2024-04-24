function nthRootOfNumber(number , root){
    let low = 0 , high = number;
    let ans = 0;
    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        let val = Math.pow(mid , root);
        if(val <= number){
            low = mid + 1; 
        }else{
            high = mid - 1;
        }
    }

    return high;
}

console.log(nthRootOfNumber(27 , 3));
console.log(nthRootOfNumber(69 , 4));