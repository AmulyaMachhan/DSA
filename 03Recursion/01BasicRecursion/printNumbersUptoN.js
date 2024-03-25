printNumbersUptoN(10);

function printNumberNTimes(number , currentVal){
    if(currentVal > number){
        return;
    }
    console.log(currentVal);
    printNameNTimes(number , currentVal + 1);
}
printNameNTimes(10 , 5);
