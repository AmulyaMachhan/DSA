//Optimal approach 
//Using two pointers 
//This problem is a variation of the popular Dutch National flag algorithm
function sort0s1s2s(array){
    let mid = 0;
    let left = 0 ;
    let right = array.length - 1;
    
    while(mid <= right){
        if(array[mid] === 0){
            swap(array , left , mid);
            mid++;
            left++;
        }else if(array[mid] === 1){
            mid++;
        }else{
            swap(array , mid , right)
            right--;
        }
    }
    return array;
}
function swap(array , i , j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
console.log(sort0s1s2s([2,0,2,1,1,0]));

//this is a better approach where we use three variables to store the values of the count of 0s ,1s and 2s
//according to the count we will reassign values in the array according to the count 
function sort0s1s2s_2(array){
    let count_0 = 0;
    let count_1 = 0;
    let count_2 = 0;
    
    for(let  i = 0 ; i < array.length ; i++){
        if(array[i] == 0){
            count_0++;
        }
        if(array[i] == 1){
            count_1++;
        }
        if(array[i] == 2){
            count_2++;
        }
    }
    for(let i = 0 ; i < count_0 ; i++){
        array[i] = 0;
    }
    for(let i = count_0 ; i < count_0 +count_1 ; i++){
        array[i] = 1;
    }
    for(let i = count_1 + count_0 ; i< array.length ; i++){
        array[i] = 2;
    }
    return array;
}
console.log(sort0s1s2s_2([2,0,2,1,1,0,2]));