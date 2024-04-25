//Problem Statement: 
//You are the owner of a Shipment company. 
//You use conveyor belts to ship packages from one port to another. 
//The packages must be shipped within 'd' days.
//The weights of the packages are given in an array 'of weights'. 
//The packages are loaded on the conveyor belts every day in the same order as they appear in the array. 
//The loaded weights must not exceed the maximum weight capacity of the ship.
//Find out the least-weight capacity so that you can ship all the packages within 'd' days.

//OPTIMAL APPROACH
function capacityToShipPackagesWithinDDays_1(weights , days){

    let minWeight = Math.max(...weights);
    let maxWeight = weights.reduce((acc , weight) => acc += weight , 0);

    while(minWeight <= maxWeight){
        let mid = minWeight + Math.floor((maxWeight - minWeight)/2);

        let daysRequiredForIthWeight = daysRequiredForSpecificWeight(weights , mid);
        if(daysRequiredForIthWeight <= days){
            maxWeight = mid - 1;
        }else{
            minWeight = mid + 1;
        }
    }

    return minWeight;
}

console.log(capacityToShipPackagesWithinDDays_1([5,4,5,2,3,4,5,6] , 5));

//Time Complexity: 
//O(N * log(sum(weights[]) - max(weights[]) + 1)), 
//where sum(weights[]) = summation of all the weights, 
//max(weights[]) = maximum of all the weights, N = size of the weights array.
//Reason: We are applying binary search on the range [max(weights[]), sum(weights[])]. 
//For every possible answer ‘mid’, we are calling findDays() function. 
//Now, inside the findDays() function, we are using a loop that runs for N times.

//BRUTE FORCE APPROACH
function capacityToShipPackagesWithinDDays(weights , days){

    let minWeight = Math.max(...weights);
    let maxWeight = weights.reduce((acc , weight) => acc += weight , 0);

    for(let i = minWeight ; i <= maxWeight ; i++){
        let daysRequiredForIthWeight = daysRequiredForSpecificWeight(weights , i);

        //if for speicified weight the days are less than the given amount of days
        if(daysRequiredForIthWeight <= days){
            return i;
        }
    }

    return -1;
}

//To get days required for particular weights with a given maximum capacity
function daysRequiredForSpecificWeight(weights , capacity){
    let load = 0;
    let days = 1;//First day
    for(let i = 0 ; i < weights.length ; i++){
        if(load + weights[i] > capacity){
            //New day
            days += 1;
            //Load the weights on the new day
            load = weights[i];
        }else{
            //Load the weight on the same day
            load += weights[i];
        }
    }
    return days;
}

console.log(capacityToShipPackagesWithinDDays([5,4,5,2,3,4,5,6] , 5));

//Time Complexity: O(N * (sum(weights[]) - max(weights[]) + 1)), 
//Reason: We are using a loop from max(weights[]) to sum(weights[]) to check all possible weights. 
//Inside the loop, we are calling findDays() function for each weight. 
//Now, inside the findDays() function, we are using a loop that runs for N times.