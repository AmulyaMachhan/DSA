//BRUTE FORCE APPROACH
function capacityToShipPackagesWithinDDays(weights , days){

    if(weights.length > days){
        return -1;
    }
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
    let days = 1;
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

console.log(capacityToShipPackagesWithinDDays([5,4,5,2,3,4,5,6] , 5))