function isArmstrongNumber(number){
    let digitCount = 0;
    let ArmstrongNumber = 0;
    let temp = number;
    let originalNumber= number;
    while(temp > 0){
        digitCount++;
        temp = Math.floor(temp / 10);
    }
    while(number > 0){
        let digit= number % 10;
        ArmstrongNumber += Math.pow(digit, digitCount);
        number = Math.floor(number/10);
    }
    if(ArmstrongNumber === originalNumber){
        return true;
    }
    return false;
};
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(645));