function largestElement(array){

    let max = array[0]
    for(let i=0; i < array.length - 1; i++){
        if(array[i + 1] > array[i]){
            max = array[i + 1];
        }
    }
    return max;
}
console.log(largestElement([1,2,3,4,5,6,7]));
console.log(largestElement([7,6,5,4,3,2,1]));

// Time complexity = O(n)
//space complexity = O(1)

//  We can also use sorting first and then directly print the last the element