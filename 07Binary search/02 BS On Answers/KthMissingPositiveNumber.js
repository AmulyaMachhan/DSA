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
