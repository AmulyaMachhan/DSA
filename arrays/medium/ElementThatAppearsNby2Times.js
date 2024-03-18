//Optimal Approach
//Moore Voting Algorithm
function ElementThatAppearsNby2Times_1(array){
    
    let count = 0;
    let el ;
    for(let i = 0 ; i < array.length ; i++){
        if(count == 0){
            count = 1;
            el = array[i];
        }else if(el == array[i]){
            count++;
        }else{
            count--;
        }
    } 

    let count_1 = 0; 
    for(let i = 0 ; i<array.length ; i++){
        if(array[i] == el){
            count_1++;
        }
    }
    console.log(el);
    return el;
}
console.log(ElementThatAppearsNby2Times_1([2,1,1,1,2]))
console.log(ElementThatAppearsNby2Times_1([3,2,3]))
console.log(ElementThatAppearsNby2Times_1([4,4,2,4,3,4,4,3,2,4]))

//Better Approach
function ElementThatAppearsNby2Times(array){
    let hashMap = {};
    for(let i = 0 ; i < array.length ; i++){
        if(hashMap[array[i]]){
            hashMap[array[i]]++;
        }else{
            hashMap[array[i]] = 1;
        }
    }
    console.table(hashMap);
    for(let key in hashMap ){
        if(hashMap[key] > (array.length / 2)){
            return key;
        }
    }
    // for({key , value} in hashMap){
    //     return (value > (array.length/2)) ? key : 0;
    // }
}

console.log(ElementThatAppearsNby2Times([2,1,1,1,2]))
console.log(ElementThatAppearsNby2Times([3,2,3]))
console.log(ElementThatAppearsNby2Times([4,4,2,4,3,4,4,3,2,4]))