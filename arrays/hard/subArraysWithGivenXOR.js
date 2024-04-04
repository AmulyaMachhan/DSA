//OPTIMAL APPROACH
function subArraysWithGivenXOR(array , target){
    let hashMap = new Map();
    let count = 0 ;
    let xor = 0;;
    hashMap.set(xor , 1)
    for(let i = 0 ; i < array.length ; i++){
        xor ^= array[i];

        if(xor == target){
            count++;
        }
        let rem = xor ^ target;
        count += hashMap.get(rem) || 0;

        hashMap.set(xor , (hashMap.get(xor) || 0) + 1)
    }
    return count;
}

console.log(subArraysWithGivenXOR([4, 2, 2, 6, 4] ,  6))

//BRUTE FORCE APPROACH 
function subArraysWithGivenXOR_1(array , target) {
    let count = 0 ;
    for(let i = 0 ; i < array.length ; i++){
        let xor = 0 ;
        for(let j = i ; j < array.length ; j++){
            xor ^= array[j];
            
            if(xor == target){
                count++
            }
        }
    }
    return count
}
console.log(subArraysWithGivenXOR_1([4, 2, 2, 6, 4] ,  6))
console.log(subArraysWithGivenXOR_1([5, 6, 7, 8, 9] ,  5))