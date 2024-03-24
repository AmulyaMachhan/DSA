function longestConsecutiveSequence(array){
    let count = 0;
    let longestSequence = 0;
    let lastSmaller = -Infinity;

    for(let i = 0 ; i < array.length ; i++){
        if(array[i] - 1 == lastSmaller){
            count += 1;
            lastSmaller = array[i];
        }
        else if(array[i] !== lastSmaller){
            count = 1;
            lastSmaller = array[i];
        }
        longestSequence = Math.max(longestSequence , count);
    }
    return longestSequence;
}

console.log(longestConsecutiveSequence([1,2,3,4,100,200]));
console.log(longestConsecutiveSequence([1,99,100,200]));
console.log(longestConsecutiveSequence([0,1,2,3,4,5,6,7,8,9]));