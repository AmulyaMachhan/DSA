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