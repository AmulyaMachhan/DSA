//using in-built reverse function in javascript
const reverseNumber = (number) => {
    return number.toString().split('').reverse().join('');
}
console.log(reverseNumber(123456));

!function reverseNumber2(number){
    let reverseNum = 0;
    while(number > 0){
        reverseNum = 10*reverseNum + number % 10;
        number = Math.floor(number/10);
    }
    console.log(reverseNum);
}(1224565);

!function reverseNumber3(number){
    let arr =[];
    while(number > 0){
        arr.push(number%10);
        number = Math.floor(number/10);
    }
    let i = 1;
    let reverse = 0
    while(arr.length != 0){
        reverse = reverse + arr[arr.length - 1]* i;
        arr.pop();
        i = i*10;
    }
    console.log(reverse);
    // let reverseNum = Number.parseInt(arr.join(''));
    // console.log(reverseNum);
}(12243435);