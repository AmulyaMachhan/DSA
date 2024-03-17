!function countDigits1(number){
    let count = number.toString().length;
    console.log(count);
}(12345);

!function countDigits2(number){
    let count = 0;
    while(number !== 0){
        number = Math.floor(number/10);
        count++;;
    }
    console.log(count);
}(12354);

!function countDigits3(number){
    let count = Math.floor(Math.log10(number) + 1);
    console.log(count);
}(12345);

function countDigits4(number){
    if( number < 10){
        return 1;
    }
    return 1 + countDigits4(Math.floor(number/10));
};
console.log(countDigits4(4859234));
