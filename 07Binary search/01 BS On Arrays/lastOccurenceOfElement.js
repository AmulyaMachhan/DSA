function lastOccurenceOfElement(array , target){
    let low = 0;
    let high = array.length - 1;
    let ans = -1;

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);
        if(array[mid] === target){
            ans = mid;
            low = mid + 1; 
        }else if(array[mid] > target){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return ans;
}

console.log(lastOccurenceOfElement([3,4,13,13,13,20,40] , 13));
console.log(lastOccurenceOfElement([3,4,13,13,13,20,40] , 60));