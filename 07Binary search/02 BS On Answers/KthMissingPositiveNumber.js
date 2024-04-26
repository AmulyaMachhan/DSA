//OPTIMAL APPROACH
function KthMissingPositiveNumber_2(vector , k){
    let low = 0 ; high = vector.length - 1;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        let missing = vector[mid] - (mid + 1);
        if(missing < k ){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return k + high + 1;
}

console.log(KthMissingPositiveNumber_2([4,7,9,10] , 1));
console.log(KthMissingPositiveNumber_2([4,7,9,10] , 4));

//BETTER APPROACH
function KthMissingPositiveNumber_1(vector , k){
    for(let i = 0 ; i < vector.length ; i++){
        //Shifting the elements
        if(vector[i] <= k) k++
        else break ;
    }
    return k;
}

console.log(KthMissingPositiveNumber_1([4,7,9,10] , 1));
console.log(KthMissingPositiveNumber_1([4,7,9,10] , 4));

//BRUTE FORCE APPROACH 
function KthMissingPositiveNumber(array , k){
    let max = Math.max(...array);
    let temp = [];
    for(let i = 1 ; i < max ; i++){
        if(!array.includes(i)){
            temp.push(i);
        }
    }

    return temp[k - 1];
}

console.log(KthMissingPositiveNumber([4,7,9,10] , 1));
console.log(KthMissingPositiveNumber([4,7,9,10] , 4));
