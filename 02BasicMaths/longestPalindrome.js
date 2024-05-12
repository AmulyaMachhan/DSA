function longestPalindrome(str){
    let map = new Map();
    for(let i = 0 ; i < str.length ; i++){
        if(map.has(str[i])) map.set(str[i] , map.get(str[i]) + 1);
        else map.set(str[i], 1)
    }
    console.table(map);
    let length = 0;
    let oddfrequency = false;
    for(let freq of map.values()){
        if((freq % 2) == 0){
            length += freq;
        }else{
            length += freq - 1;
            oddfrequency = true;
        }
    }

    if(oddfrequency) length++;
    return length;
}
console.log(longestPalindrome("abccccdd"));