//Time complexity = O(n)
function divisorsOfNumber(number){
    const arr =[]
    for(let i = 1 ; i<=number ; i++){
        if(number % i == 0){
            arr.push(i);
        }
    };
    return arr;
} 

console.log(divisorsOfNumber(55));
console.log(divisorsOfNumber(72));
console.log(divisorsOfNumber(36));

//optimal approach 
//Time complexity = O(sqrt(n))
function divisorsOfNumber2(number){
    let arr =[]
    let length = Math.floor(Math.sqrt(number));
    for(let  i= 0 ; i<= length ; i++){
        if(number%i ==0){
            if(i !== number/i){
                arr.push(i);
                arr.push(number/i);
            }
        }
    }
    return arr;
}
console.log(divisorsOfNumber2(55));
console.log(divisorsOfNumber2(72));
console.log(divisorsOfNumber2(36));