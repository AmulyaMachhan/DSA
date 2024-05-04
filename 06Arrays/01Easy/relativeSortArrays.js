//PROBLEM STATEMENT
//Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

//Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
//Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

//OPTIMAL SOLUTION 
//Using counting sort
function relativeSortArrays_2(arr1 , arr2){
    let max = Math.max(...arr2);

    const countArray = new Array(max + 1).fill(0);

    for(let i = 0; i < arr1.length; i++){
        countArray[arr1[i]]++;
    }

    const result = [];
    for(let i = 0; i < arr2.length; i++){
        while(countArray[arr2[i]] === 0){
            result.push(arr2[i]);
            countArray[arr2[i]]--;
        }
    }

    for(let i = 0; i <= max; i++){
        while(countArray[arr1[i]] > 0){
            result.push(arr1[i]);
            countArray[arr1[i]]--;
        }
    }

    return result;
}

console.log(relativeSortArrays_2([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
console.log(relativeSortArrays_2([28,6,22,8,44,17], [22,28,8,6]));

//BETTER SOLUTION
//USING HASHMAP FOR COUNTING AND SORTING
function relativeSortArrays_1(arr1 , arr2){
    let result = [];
    let remaining = [];
    let map = new Map();

    for(let i = 0; i < arr2.length; i++){
        map.set(arr2[i] , 0);
    }

    for(let i = 0; i < arr1.length; i++){
        if(map.has(arr1[i])){
            map.set(arr1[i] , map.get(arr1[i]) + 1);
        }else{
            remaining.push(arr1[i]);
        }
    }

    remaining.sort((a,b) => a - b);

    for(let i = 0; i < arr2.length ; i++){
        for(let j = 0; j < map.get(arr2[i]); j++){
            result.push(arr2[i]);
        }
    }

    return result.concat(remaining);
}

console.log(relativeSortArrays_1([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
console.log(relativeSortArrays_1([28,6,22,8,44,17], [22,28,8,6]));

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