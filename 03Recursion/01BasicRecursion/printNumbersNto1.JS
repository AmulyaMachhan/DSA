function printNumbersNto1(number){
    if( number === 1 ){
        console.log(number);
        return ;
    }
    console.log(number);
    printNumbersNto1(number - 1);
};
printNumbersNto1(10);
