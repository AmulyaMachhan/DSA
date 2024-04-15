// PROBLEM STATEMENT 
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// APPROACH 1 
// Using hashMap data structure
function containsDuplicate(array){
    let map = new Map();

    for(let items of array){
        if(map.has(items)) return true;
        else map.set( items , 1)
    }

    return false;
}

console.log(containsDuplicate([1,1,1,2,3]));
console.log(containsDuplicate([1,2,3]));

// APPROACH 2
// USING SORTING;
function containsDuplicate_1(array){
    array.sort((a , b) => a- b);

    for(let i = 0; i < array.length; i++){
        if(array[i] === array[i+1]){
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate_1([1,1,1,2,3]));
console.log(containsDuplicate_1([1,2,3]));