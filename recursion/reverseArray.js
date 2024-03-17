function reverseArray(arr , i , j){
    if( i < j){
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        reverseArray(arr , i+1 , j-1);
        return arr;
    }
}
console.log(reverseArray([1,2,3,4,5,6] , 0 , 5))