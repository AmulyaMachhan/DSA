//PROBLEM STATEMENT
//Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

//Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
//Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

//BRUTE FORCE SOLUTION
function relativeSortArrays(arr1 , arr2){
    arr1.sort((a,b) => a- b);
    let index = 0;

    for(let i = 0 ; i < arr2.length ; i++){
        let temp = arr2[i];
        for(let j = 0; j < arr1.length ; j++){
            if(arr1[j] === temp){
                [arr1[index] , arr1[j]] = [arr1[j] , arr1[index]];
                index++;
            }
        }
    }
    return arr1;
}                  

console.log(relativeSortArrays([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
console.log(relativeSortArrays([28,6,22,8,44,17], [22,28,8,6]));