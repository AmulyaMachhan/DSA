//OPTIMAL APPROACH
//Extension of Moore's Voting Algorithm 
function majorityElementThatAppearsNBy3Times_2(array){
    let el1 = null;
    let el2 = null;

    let cnt1 = 0 , cnt2 = 0 ;
    for(let i = 0 ; i < array.length ; i++){
        if(cnt1 == 0 && el1 != array[i]){
            el1 = array[i];
            cnt1 = 1;
        }
        else if(cnt2 == 0 && el2 != array[i]){
            el2 = array[i];
            cnt2 = 1;
        }
        else if( el1 == array[i]){ cnt1++; }
        else if( el2 == array[i]){ cnt2++; }
        else{
            cnt1--;
            cnt2--;
        }
    }
    cnt1 = 0;
    cnt2 = 0;

    for(let i = 0 ; i < array.length ; i++){
        if(array[i] == el1){
            cnt1++;
        }
        else if(array[i] == el2){
            cnt2++;
        }
    }

    const result = [];
    if(cnt1 > Math.floor(array.length/3)){result.push(el1)}
    if(cnt2 > Math.floor(array.length/3)){result.push(el2)}

    return result;
}
console.table(majorityElementThatAppearsNBy3Times_2([11,11,33,33,11,33]));
console.table(majorityElementThatAppearsNBy3Times_2([1,2,2,3,3,2]));

//BETTER APPROACH
//Using HashMap where the count of each element in array is stored 
function majorityElementThatAppearsNBy3Times(array){
    let hashMap = {};
    let result = [];
    for(let i = 0 ; i < array.length ; i++){
        if(hashMap[array[i]]){
            hashMap[array[i]]++;
        }else{
            hashMap[array[i]] = 1;
        }
    }

    for(let key in hashMap){
        if(hashMap[key] >= Math.floor(array.length/3)){
            result.push(key);
        }
    }
    return result;
}

console.table(majorityElementThatAppearsNBy3Times([11,11,33,33,11,33]));
console.table(majorityElementThatAppearsNBy3Times([1,2,2,3,3,2]));

//BRUTE FORCE APPROACH 
function majorityElementThatAppearsNBy3Times_1(array){
    const result = [];
    for(let i = 0 ; i < array.length ; i++){
        
        let count = 0 
        if(result.length == 0 || result[0] != array[i]){
            for(let j=0 ; j < array.length ; j++ ){
                if(array[j] == array[i]){
                    count++
                }
            }
            if(count > Math.floor(array.length/3)){
                result.push(array[i])
            }
        }
        
        if(result.length == 2 ) {break;}
    }
    return result ;
}
console.table(majorityElementThatAppearsNBy3Times_1([11,11,33,33,11,33]));
console.table(majorityElementThatAppearsNBy3Times_1([1,2,2,3,3,2]));