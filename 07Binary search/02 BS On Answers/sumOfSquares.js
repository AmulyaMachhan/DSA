function sumofSquaresOfANumber(number){
    let low = 0, high = number;

    while(low <= high){
        let square = Math.pow(low ,2) + Math.pow(high ,2);

        if(square < number)low++;
        else if(square > number) high--;
        else return true;
    }
    console.log([low , high]);
    return false;
}

console.log(sumofSquaresOfANumber(5));
console.log(sumofSquaresOfANumber(3));
console.log(sumofSquaresOfANumber(5));
console.log(sumofSquaresOfANumber(1000000000));