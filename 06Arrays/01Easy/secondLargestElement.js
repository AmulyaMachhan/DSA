//This only works when there are no duplicates in the array 
//This is a brute force method where we first sort the array and then print the second largest element
function secondLargestElement(array){
    array.sort((a,b)=> a - b)
    return array[array.length - 2];
}
console.log(secondLargestElement([2,3,4,1,8,9,7,6]));

//Better approach
// Find the smallest and largest element in the array in a single traversal
// After this, we once again traverse the array and find an element that is just greater than the smallest element we just found.
// Similarly, we would find the largest element which is just smaller than the largest element we just found
// Indeed, this is our second smallest and second largest element.
function secondLargestElement21(array){
    let maxElement = Math.max.apply(null , array)
    let secondMaxElement = -Infinity;
    for(let i=0 ; i<array.length ; i++){
        if(secondMaxElement < array[i] && array[i] !== maxElement){
            secondMaxElement = array[i];
        }
    }
    return secondMaxElement;
}
console.log(secondLargestElement21([2,3,4,1,8,9,7,6]));

//Optimal approach
// If the current element is larger than ‘large’ then update second_large and large variables
// Else if the current element is larger than ‘second_large’ then we update the variable second_large.
// Once we traverse the entire array, we would find the second largest element in the variable second_large.
// Here’s a quick demonstration of the same.
function secondLargestElement3(array){
    let large = -Infinity
    let secondLarge =-Infinity;
    
    for(let  i = 0 ; i< array.length ; i++){
        if(array[i] > large){
            secondLarge = large;
            large = array[i];
        }else if(array[i] > secondLarge && array[i] !== large){
            secondLarge = array[i];
        }
    } 
    return secondLarge;
}
console.log(secondLargestElement3([2,3,4,1,8,9,7,6]));
console.log(secondLargestElement3([9,8,7,6]));