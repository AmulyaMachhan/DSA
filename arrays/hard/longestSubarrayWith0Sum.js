function longestSubarrayWith0Sum(array){
    let hashMap = new Map();
    let maxLen = 0
    let sum = 0
    for(let i = 0 ; i < array.length ; i++){
        sum += array[i];

        if(sum == 0 ){
            maxLen = Math.max(maxLen , i + 1);
        }
        if(hashMap.has(sum)){
            let len = i - hashMap.get(sum);
            maxLen = Math.max(maxLen , len);
        }
        if(!hashMap.has(sum)){
            hashMap.set(sum , i);
        }
    }
    return maxLen;
}

console.log(longestSubarrayWith0Sum([9, -3, 3, -1, 6, -5]));
console.log(longestSubarrayWith0Sum([6, -2, 2, -8, 1, 7, 4, -10]));