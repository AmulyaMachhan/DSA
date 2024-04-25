//Problem Statement: 
//A monkey is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas. 
//An integer ‘h’ is also given, which denotes the time (in hours) for all the bananas to be eaten.

//Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. 
//If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.

//Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.

//OPTIMAL APPROACH
//Using Binary Search
function KokoEatingBananas_1(array, hours){
    let max = Math.max.apply(null, array);

    let low = 1 , high = max; 
    while(low <= high){
        let mid = low + Math.floor((high - low) / 2);
        let hoursTaken = hoursToEatBananas(mid , array);
        if(hoursTaken <= hours) high = mid - 1;
        else low = mid + 1;

    }
    return low;

}

function hoursToEatBananas(bananas , array){
    let totalHoursTaken = 0;
    for(let i = 0 ; i < array.length ; i++){
        totalHoursTaken += Math.ceil(array[i] / bananas);
    }
    return totalHoursTaken;
}

console.log(KokoEatingBananas_1([7, 15, 6, 3] , 8 ));
console.log(KokoEatingBananas_1([25, 12, 8, 14, 19] , 5 ));

//BRUTE FORCE APPROACH

//Function which gives the total hours it takes to eat bananas from the array
function hoursItTakesToEatBananas(bananas , array){
    let hoursTaken = 0;

    for(let i = 0 ; i < array.length ; i++){
        hoursTaken += Math.ceil(array[i] / bananas)
    }

    return hoursTaken;
}

function KokoEatingBananas(array , hours){
    //To find the max element in array
    let max = Math.max.apply(null , array);

    //To find the minimum number of bananas it will lie in the range of 1 to max element
    for(let i = 0 ; i <= max ; i++){

        //Calculate hours taken to eat i bananas 
        let hoursTaken = hoursItTakesToEatBananas(i , array);

        //To check if the hours taken is less than or equal to the hours given
        if(hoursTaken <= hours){
            return i;
        }
    }
    return 0;
}

console.log(KokoEatingBananas([7, 15, 6, 3] , 8 ));
console.log(KokoEatingBananas([25, 12, 8, 14, 19] , 5 ));