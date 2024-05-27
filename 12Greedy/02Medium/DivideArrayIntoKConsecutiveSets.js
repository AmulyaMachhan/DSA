//PROBLEM STATEMENT
// Given an array of integers nums and a positive integer k, check whether it is possible to divide this array into sets of k consecutive numbers.

// Return true if it is possible. Otherwise, return false.

//APPROACH - 1
// Check if the length of the array is divisible by k. If not, return false.
// Initialize an unordered map to keep track of the frequency of each element.
// Iterate over the array and update the map with the frequency of each element.
// Sort the array in ascending order.
// For each element in the sorted array, check if its frequency is greater than 0.
// If yes, iterate over the next k-1 elements and check if they exist in the map and have a frequency greater than 0. If any element is missing or has a frequency of 0, return false.
// Update the frequency of each element in the group.
// Repeat steps 5-7 until all groups of k consecutive elements have been formed.
// Return true if all groups of k consecutive elements can be formed.
function divideArrayIntoKConsecutiveSets(array , k){
    if(array.length % k !== 0)return false;

    let map = new Map;
    for(let i = 0 ; i < array.length; i++){
        map.set(array[i] , (map.get(array[i]) || 0 ) + 1);
    }

    array.sort((a,b) => a - b);

    for(let i = 0 ; i < array.length ; i++){
        if(map.get(array[i]) > 0){
            for(let j = array[i] + 1 ; j < array[i] + k ; j++){
                if(map.get(j) === 0 || !map.has(j)) return false;
                map.set(j , map.get(j) - 1);
            }
            map.set(array[i] , map.get(array[i]) - 1);
        }
    }

    return true;
}

console.log(divideArrayIntoKConsecutiveSets([1,2,3,4,5], 4));
console.log(divideArrayIntoKConsecutiveSets([1,2,2,3,3,4,5,5,6,7,6,7,8,9,10], 3));
console.log(divideArrayIntoKConsecutiveSets([1,2,3,3,4,4,5,6], 4));
console.log(divideArrayIntoKConsecutiveSets([1,2,3,3,4,4,5,6,7,10,11,12], 4));


//APPROACH - 2
function divideArrayIntoKConsecutiveSets_1(array , k){
    if(array.length % k !== 0)return false;
    
    let map = new Map();
    for(const element of array){
        map.set(element , (map.get(element) || 0) + 1);
    }

    while(map.size !== 0){
        let first = Array.from(map.keys()).sort((a,b) => a- b)[0];
        for(let i = first; i < first + k ; i++){
            if(map.get(i) === 0 || !map.has(i)) return false;
            map.set(i , map.get(i) - 1);
            if(map.get(i) === 0) map.delete(i);
        }
    }

    return true;
} 

console.log(divideArrayIntoKConsecutiveSets_1([1,2,3,4,5], 4));
console.log(divideArrayIntoKConsecutiveSets_1([1,2,2,3,3,4,5,5,6,7,6,7,8,9,10], 3));
console.log(divideArrayIntoKConsecutiveSets_1([1,2,3,3,4,4,5,6], 4));
console.log(divideArrayIntoKConsecutiveSets_1([1,2,3,3,4,4,5,6,7,10,11,12], 4));