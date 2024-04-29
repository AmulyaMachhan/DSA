//OPTIMAL APPROACH
function reverseWords_1(string) {
    let reversed = '';
    let word = '';
    let i = 0;

    // Iterate through each character in the string
    while (i < string.length) {
        // Skip leading spaces
        while (string[i] === ' ' && i < string.length) {
            i++;
        }

        // Construct each word
        while (string[i] !== ' ' && i < string.length) {
            word += string[i];
            i++;
        }

        // Add the constructed word to the beginning of the result string
        if (word !== '') {
            if (reversed === '') {
                reversed = word;
            } else {
                reversed = word + ' ' + reversed;
            }
            word = '';
        }
    }

    return reversed;
}

console.log(reverseWords_1(["Vishrut loves Gym"]));

//Time complexity: 𝑂(𝑛)
// O(n), where n is the length of the input string. This is because the algorithm iterates through each character of the string once to construct the reversed string.
//Space complexity: O(n). 
//The space complexity is also linear with respect to the input string length n because the algorithm constructs a new string to hold the reversed words

//BETTER APRROACH
function reverseWords(s) {
    // Split the string into an array of words
    const words = s.trim().split(/\s+/);

    // Reverse the order of the array
    words.reverse();

    // Join the words back into a string
    return words.join(' ');
}
//BRUTE FORCE APPROACH
function reverseWords(string){
    let str = "";
    let array = [];
    string += " ";
    for(let i = 0 ; i < string.length ; i++){
        if(string[i] == " "){
            array.push(str);
            str= "";
        }else{
            str += string[i];
        }
    }
    for(let i = array.length - 1 ; i >= 0 ; i--){
        str += array[i] + " ";
    }
    
    return str;
}

console.log(reverseWords(["Vishrut loves Gym"]));
// Time Complexity: O(N), Traversing the entire string
// Space Complexity: O(N), array and ans variable