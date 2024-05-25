//PROBLEM STATEMENT
//Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). 

//You may return the answer in any order.

//OPTIMAL SOLUTION
function commonLetters(strings){

    let minFreq = new Array(26).fill(Infinity);
    let result = [];

    for(const word of strings){
        let freq = new Array(26).fill(0);
        for(const char of word){
            freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        for(let j = 0 ; j < 26; j++){
            minFreq[j] = Math.min(freq[j] , minFreq[j])
        }
    }

    for(let i = 0; i < 26 ; i++){
        while(minFreq[i] > 0){
            result.push(String.fromCharCode(i + "a".charCodeAt(0)));
            minFreq[i]--;
        }
    }
    return result;
}

console.log(commonLetters(["bella","label","roller"]));


