//OPTIMAL APPROACH
//Add all the elements to the set and then iterate through every element if at each step the element has a 
//previous consecutive value than it would be discarded until we find an element with no previous values and 
//that means it would be the starting point of that consecutive array 
function longestConsecutiveSequence_1(array){
    const set = new Set(array);
    let longestSequence = 1;
    for(let value of set){

        if(!set.has(value - 1)){
            let count = 1;
            let currVal = value;
            while(set.has(currVal + 1)){
                count++;
                currVal = currVal + 1;
            }
            longestSequence = Math.max(longestSequence , count);
        }
    }
    return longestSequence;
}
console.log(longestConsecutiveSequence_1([1,2,3,4,100,200]));
console.log(longestConsecutiveSequence_1([1,99,100,200]));
console.log(longestConsecutiveSequence_1([0,1,2,3,4,5,6,7,8,9]));

//OPTIMAL APPROACH
//First sort the array and then look for the consecutive elements
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