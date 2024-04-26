function aggressiveCows(stalls , noOfCows){
    stalls.sort((a,b) => a -b);
    let n = stalls.length;

    //The maximum possible distance between cows can be the first and the last position in the stalls
    let maxPossibleDistance = stalls[n -1] - stalls[0];

    for(let dist = 0 ; dist <= maxPossibleDistance ; dist++){
        //Checking if for the given distance we can place the given number of cows
        //This check returns for the first maximum possible distance that we cannot place the cow
        if(placingCowsAccordingToDistance(stalls , dist , noOfCows) === false){
            //We return the previous distance for which distance the placingCows function was true
            return dist - 1;
        }
    }
    return maxPossibleDistance;
}

function placingCowsAccordingToDistance(stalls , dist , noOfCows){
    //First Cow
    let countOfCows = 1;
    //Placing First Cow at the starting position
    let lastCowPlace = stalls[0];
    for(let i = 0 ; i < stalls.length ; i++){
        //Checking if the distance between the last placed cow and current cow is greater than the minimum distance given
        if(stalls[i] - lastCowPlace >= dist){
            //Placing the cow at ith position
            countOfCows++;
            //Updating the last position to the current position for the next loop
            lastCowPlace = stalls[i];
        }
        if(countOfCows >= noOfCows){
            return true;
        }
    }
    //Checking if the number of cows placed in the stalls is greater than the given number of cows to be placed

    return false;
}

console.log(aggressiveCows([0, 3, 4, 7, 10, 9] , 4));
console.log(aggressiveCows([4, 2, 1, 3, 6] , 2));