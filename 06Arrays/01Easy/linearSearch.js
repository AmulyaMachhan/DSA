function linearSearch(array , number){
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] == number){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3,4,5,6] , 6))