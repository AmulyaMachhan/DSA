//Problem Statement: 
//You are given 'N’ roses and you are also given an array 'arr'  
//'arr[i]'  denotes that the 'ith' rose will bloom on the 'arr[i]th' day.

//You can only pick already bloomed roses that are adjacent to make a bouquet. 
//You are also told that you require exactly 'k' adjacent bloomed roses to make a single bouquet.

//Find the minimum number of days required to make at least ‘m' bouquets each containing 'k' roses. 
//Return -1 if it is not possible.
//OPTIMAL APPROACH 
//Using Binary Seach
function minimumDaysToMakeMBouquests_1(array , bouquetsRequired , noOfRosesInOneBouquet){
    let n = array.length ;
    if(n < bouquetsRequired * noOfRosesInOneBouquet) return -1;

    let max = Math.max.apply(null , array);
    let min = Math.min.apply(null , array);

    while(min <= max){
        let mid = min + Math.floor((max - min) / 2);
        let noOfBouquets = noOfBouquestsThatCanBeMade(array , mid , noOfRosesInOneBouquet , n);
        if( noOfBouquets >= bouquetsRequired){
            max = mid - 1;
        }else{
            min = mid + 1;
        }
    }
    return min;
}

function noOfBouquestsThatCanBeMade(array , mid , noOfRosesInOneBouquet , n){
    let cnt = 0; 
    let noOfBouquests = 0;

    for(let i = 0 ; i < n ; i++){
        if(array[i] <=  mid){
            cnt++;
        }else{
            noOfBouquests += Math.floor(cnt / noOfRosesInOneBouquet);
            cnt = 0;
        }
    }
    noOfBouquests += Math.floor(cnt / noOfRosesInOneBouquet);
    return noOfBouquests;
}

console.log(minimumDaysToMakeMBouquests_1([7, 7, 7, 7, 13, 11, 12, 7] , 2 , 3));

//Time Complexity: O(log(max(arr[])-min(arr[])+1) * N).
//Reason: We are applying binary search on our answers that are in the range of [min(arr[]), max(arr[])]. 
//For every possible answer ‘mid’, we will call the possible() function. 
//Inside the possible() function, we are traversing the entire array, which results in O(N).

//BRUTE FORCE APPROACH
function minimumDaysToMakeMBouquests(array , bouquetsRequired , noOfRosesInOneBouquet){
    let n = array.length;
    
    if(n < bouquetsRequired * noOfRosesInOneBouquet) return -1;
    
    let min = Math.min.apply(null , array);
    let max = Math.max.apply(null , array);

    for(let days = min ; days <= max ; days++){
        if(possible(array, days, bouquetsRequired, noOfRosesInOneBouquet)){
            return days
        }
    }
    return -1;
}

function possible(array, day, bouquetsRequired , noOfRosesInOneBouquet){
    let cnt = 0;
    let noOfBouquestsThatCanBeMade = 0;
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] <= day){
            cnt++;
        }else{
            noOfBouquestsThatCanBeMade += Math.floor(cnt / noOfRosesInOneBouquet);
            cnt = 0;
        }
    }
    
    noOfBouquestsThatCanBeMade += Math.floor(cnt / noOfRosesInOneBouquet);
    
    return noOfBouquestsThatCanBeMade >= bouquetsRequired;
}

console.log(minimumDaysToMakeMBouquests([7, 7, 7, 7, 13, 11, 12, 7] , 2 , 3));

//Time Complexity: 
//O((max(arr[])-min(arr[])+1) * N)
//Reason: We are running a loop to check our answers that are in the range of [min(arr[]), max(arr[])]. 
//For every possible answer, we will call the possible() function. 
//Inside the possible() function, we are traversing the entire array, which results in O(N).

//Let's grasp the question better with the help of an example. 
//Consider an array: {7, 7, 7, 7, 13, 11, 12, 7}. We aim to create bouquets with k, which is 3 adjacent flowers, and we need to make m, which is 2 such bouquets. 
//Now, if we try to make bouquets on the 11th day, the first 4 flowers and the 6th and the last flowers would have bloomed. 
///So, we will be having 6 flowers in total on the 11th day. However, we require two groups of 3 adjacent flowers each. 
//Although we can form one group with the first 3 adjacent flowers, we cannot create a second group. Therefore, 11 is not the answer in this case.

// If we choose the 12th day, we can make 2groups, one  = first 3 adjacent flowers & other = 3 adjacent flowers.
//Hence, we need a minimum of 12 days to make 2 bouquets.

// Observation: 

// Impossible case: 
//      To create m bouquets with k adjacent flowers each, we require a minimum of m*k flowers in total. 
//      If the number of flowers in the array, represented by array-size, is less than m*k, it becomes impossible to form m bouquets even after all the flowers have bloomed. 
//      In such cases, where array-size < m*k, we should return -1.
// Maximum possible answer: 
//      The maximum potential answer corresponds to the time needed for all the flowers to bloom. 
//      In other words, it is the highest value within the given array i.e. max(arr[]).
// Minimum possible answer: 
//      The minimum potential answer corresponds to the time needed for atleast one flower to bloom. 
//      In other words, it is the smallest value within the given array i.e. min(arr[]).

// Note: From the above observations, we can conclude that our answer lies between the range [min(arr[]), max(arr[])].

// How to calculate the number of bouquets we can make on dth day:
// We will count the number of adjacent bloomed flowers(say cnt) and whenever we get a flower that is not bloomed, we will add the number of bouquets we can make with ‘cnt’ adjacent flowers i.e. floor(cnt/k) to the answer. We will follow the process throughout the array. 
// Now, we will write a function possible(), that will return true if, on a certain day, we can make at least m bouquets otherwise it will return false. The steps will be the following:

// possible(arr[], day, m, k) algorithm:

        // We will declare two variables i.e. ‘cnt’ and ‘noOfB’.
        // cnt -> the number of adjacent flowers,
        // noOfB -> the number of bouquets.
        // We will run a loop to traverse the array.
        // Inside the loop, we will do the following:
        // If arr[i] <= day: This means the ith flower has bloomed. So, we will increase the number of adjacent flowers i.e. ‘cnt’ by 1.
        // Otherwise, the flower has not bloomed. Here, we will calculate the number of bouquets we can make with ‘cnt’ adjacent flowers i.e. floor(cnt/k), and add it to the noOfB. Now, as this ith flower breaks the sequence of the adjacent bloomed flowers, we will set the ‘cnt’ 0.
        // Lastly, outside the loop, we will calculate the floor(cnt/k) and add it to the noOfB.
        // If noOfB >= m: This means, we can make at least m bouquets. So, we will return true.
        // Otherwise, We will return false.


// Note: We actually pass a particular day as a parameter to the possible() function. 
//  The function returns true if it is possible to make atleast m bouquets on that particular day, otherwise, it returns false.