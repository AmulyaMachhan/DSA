function fourSum(array , target){
    let n = array.length ;
    const res = [];
    array.sort((a,b) => a - b);

    for(let i = 0 ; i < n ; i++){
        if( i != 0 && array[i] == array[i - 1]) continue;
        
        for(let j = i + 1 ; j < n ; j++ ){
            if( j > i + 1 && array[j] == array[j - 1]) continue;

            let  k = j + 1;
            let  l = n - 1;

            while( k < l){
                let sum = array[i] + array[j] + array[k] + array[l];
                if(sum > target){
                    l--
                }else if(sum  < target){
                    k++;
                }else{
                    res.push([array[i],array[j],array[k],array[l]]);
                    k++;
                    l--;

                    while( k < l && array[k] == array[k -1]) k++;  
                    while( k < l && array[l] == array[l +1]) l--;  
                }

            }

        }
    }
    return res
}

console.table(fourSum([4,3,3,4,4,2,1,2,1,1] , 9 ))