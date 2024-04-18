function summaryRanges(array){
    let j = 0;
    let result = [];
    for(let i = 0; i < array.length; i++){
        let str = "";
        if(array[i] + 1 === array[i+1]){
            continue;
        }else{
            if(i !== j) str = `${array[j]}->${array[i]}`
            else{
                str = `${array[i]}`
            }
            j = i + 1;
        }
        result.push(str)
    }
    return result;
}

console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));