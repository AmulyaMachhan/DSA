function isSorted(array){

    if(array[0] < array[1]){
        for(let i = 0; i< array.length ; i++){
            if(array[i] >= array[i+1]){
                return false;   
            }
        }
    }else{
        for(let i = 0; i< array.length ; i++){
            if(array[i] <= array[i+1]){
                return false;   
            }
        }        
    }
    return true;
}

console.log(isSorted([1,2,6,5,3,4,6,4,6]));
console.log(isSorted([1,2,3,4]));
console.log(isSorted([4,3,2,1]));
