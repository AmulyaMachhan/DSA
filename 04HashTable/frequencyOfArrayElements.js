function frequencyOfArrayElements(arr){
    let hashTable = {};
    let max = -Infinity;
    let min = Infinity;
    let minKey = arr.length;
    let maxKey = 0;
    arr.forEach(value =>{
        if(hashTable[value]){
            hashTable[value]++;
        }else{
            hashTable[value] = 1;
        }
    });
    //for calculating max value
    for(let val in hashTable){
        if(hashTable[val] > max){
            maxKey = val;
            max = hashTable[val];
        }
    }
    //for calculating minimum value
    for(let val in hashTable){
        if(hashTable[val] < min){
            minKey = val;
            min = hashTable[val];
        }
    }

    console.log(`The maximum frequency is ${max} of element ${maxKey}`);
    console.log(`The minimum frequency is ${min} of element ${minKey}`);
    return hashTable;
}

console.log(frequencyOfArrayElements([1,2,3,4,5,5,6,6,7]));
console.log(frequencyOfArrayElements([10,5,10,15,10,5]));

function frequencyOfArrayElements1(arr){

    for(let i = 0 ; i < arr.length ; i++){
        let count = 1;
        for(let j=0 ; j < arr.length ; j++){
            if(i != j && arr[i] === arr[j]){
                count++
            }
        }
        console.log(`${arr[i]}:${count}`);
    }
}
frequencyOfArrayElements1([1,2,3,4,5,5,6,6,7]);
frequencyOfArrayElements1([10,5,10,15,10,5]);

function frequencyOfArrayElements2(arr){
    let visited = new Array(arr.length).fill(false); 
    for(let i = 0 ; i < arr.length ; i++){
        if(visited[i] == true)
        continue;
        let count = 1;
        for(let j= i + 1 ; j < arr.length ; j++){
            if(arr[i] === arr[j]){
                visited[j] =true;
                count++
            }
        }
        console.log(`${arr[i]}:${count}`);
    }
}

frequencyOfArrayElements2([1,2,3,4,5,5,6,6,7]);
frequencyOfArrayElements2([10,5,10,15,10,5]);