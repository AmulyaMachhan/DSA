function removeDuplicates(array){

    const result =[];
    for(let i = 0 ; i<array.length ;i++){
        if(array[i] != array[i+1]){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(removeDuplicates([1,2,2,3,5,6,7,7,8,8]));


function removeDuplicates2(array){
    const newArray = [...new Set(array)];
    return newArray
}
console.log(removeDuplicates2([1,2,2,3,5,6,7,7,8,8]));

function removeDuplicates3(array){
    const newArray = [];
    array.forEach(element => {
        if( !newArray.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
}
console.log(removeDuplicates2([1,2,2,3,5,6,7,7,8,8]));


