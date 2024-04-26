//Problem Statement: 
//You are given an array 'arr' of size 'n' which denotes the position of stalls.
//You are also given an integer 'k' which denotes the number of aggressive cows.
//You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible.
//Find the maximum possible minimum distance.

//OPTIMAL APPROACH
function aggressiveCows_1(stalls , noOfCows){
    stalls.sort((a,b) => a - b);
    let n = stalls.length;
    let low = 0 , high = stalls[n -1] - stalls[0];

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);

        if(placingCowsAccordingToDistance(stalls , mid , noOfCows)){
            low = mid + 1;
        }else{
            high = mid - 1
        }
    }

    return high;
}

console.log(aggressiveCows_1([0, 3, 4, 7, 10, 9] , 4));
console.log(aggressiveCows_1([4, 2, 1, 3, 6] , 2));

//Time Complexity: O(NlogN) + O(N * log(max(stalls[])-min(stalls[]))), where N = size of the array, max(stalls[]) = maximum element in stalls[] array, min(stalls[]) = minimum element in stalls[] array.
//Reason: O(NlogN) for sorting the array. 
//We are applying binary search on [1, max(stalls[])-min(stalls[])]. 
//Inside the loop, we are calling canWePlace() function for each distance, ‘mid’. 
//Now, inside the canWePlace() function, we are using a loop that runs for N times.

//BRUTE FORCE APPROACH
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
            return true
        }
    }
    //Checking if the number of cows placed in the stalls is greater than the given number of cows to be placed

    return false;
}

console.log(aggressiveCows([0, 3, 4, 7, 10, 9] , 4));
console.log(aggressiveCows([4, 2, 1, 3, 6] , 2));

//Time Complexity: O(NlogN) + O(N *(max(stalls[])-min(stalls[]))), where N = size of the array, max(stalls[]) = maximum element in stalls[] array, min(stalls[]) = minimum element in stalls[] array.
//Reason: O(NlogN) for sorting the array. 
//We are using a loop from 1 to max(stalls[])-min(stalls[]) to check all possible distances. 
//Inside the loop, we are calling canWePlace() function for each distance. 
//Now, inside the canWePlace() function, we are using a loop that runs for N times.