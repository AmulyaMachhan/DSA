function mergeOverlappingSubarrays(array){
    array.sort((a,b) => a[0] - b[0]);
    let ans = [];

    for(let i = 0 ; i < array.length ; i++){
        let start = array[i][0];
        let end = array[i][1];

        if(ans.length && end <= ans[ans.length - 1][1]){ continue};

        for(let j = i + 1 ; j < array.length ; j++){
            if(end >= array[j][0]){
                end = Math.max(end , array[j][1])
            }else{
                break;
            }
        }

        ans.push([start , end])
    }
    return ans;
}

console.table(mergeOverlappingSubarrays([[1, 3], [8, 10], [2, 6], [15, 18]]))
