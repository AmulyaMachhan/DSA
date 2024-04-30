function sortStringByFrequencyOfCharacters(string){
    let frq = {};
    for(let i = 0 ; i < string.length ; i++){
        if(frq[string[i]]) frq[string[i]]++
        else frq[string[i]] = 1;
    }

    let frqArray = Object.entries(frq);

    frqArray.sort((a, b) => b[1] - a[1]);

    let sortedString = "";
    for(let [char , freq] of frqArray){
        sortedString += char.repeat(freq);
    }

    return sortedString;
}

console.log(sortStringByFrequencyOfCharacters("tree"));