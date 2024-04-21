function missingNumber(array){
  let i = 0 ;
  while(i < array.length - 1){
    if(array[i] + 1 !== array[i+1]){
        return array[i] + 1;
    }
    i++;
  }
  return -1;
}
console.log(missingNumber([1,2,3,5]))
console.log(missingNumber([1,3]))