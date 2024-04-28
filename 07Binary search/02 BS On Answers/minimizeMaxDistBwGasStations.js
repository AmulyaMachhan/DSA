//Problem Statement: 
//You are given a sorted array ‘arr’ of length ‘n’, which contains positive integer positions of ‘n’ gas stations on the X-axis. 
//You are also given an integer ‘k’. You have to place 'k' new gas stations on the X-axis. 
//You can place them anywhere on the non-negative side of the X-axis, even on non-integer positions. 
//Let 'dist' be the maximum value of the distance between adjacent gas stations after adding k new gas stations.
//Find the minimum value of ‘dist’.

//Note: Answers within 10^-6 of the actual answer will be accepted. For example, if the actual answer is 0.65421678124, it is okay to return 0.654216. Our answer will be accepted if that is the same as the actual answer up to the 6th decimal place.
//OPTIMAL APPROACH
function minimizeMaximumDistanceBetweenGasStations_2(array , k){
    let n = array.length;
    let low = 0;
    let high = 0;

    for(let i = 0 ; i < n - 1 ; i++){
        high = Math.max(high , array[i+1] - array[i]);
    }

    const diff = 10^(-6);
    while(high - low > diff){
        let mid = (low + high)/ 2.0;
        let count = noOfGasStationsRequired(array , n , mid);
        if(count > k){
            low = mid;
        }else{
            high = mid;
        }
    }

    return high;
}

function noOfGasStationsRequired(array , n , distance){
    let cnt = 0 ; 
    for(let i = 1 ; i < n ; i++){
        let numberInBetween = Math.floor((array[i] - array[i-1]) / distance);
        if((array[i] - array[i - 1]) === distance * numberInBetween){
            cnt += numberInBetween - 1;
        }else{
            cnt += numberInBetween;
        }
    }
    return cnt
}

console.log(minimizeMaximumDistanceBetweenGasStations_2([1,2,3,4,5] , 4));
console.log(minimizeMaximumDistanceBetweenGasStations_2([1,7] , 2));
console.log(minimizeMaximumDistanceBetweenGasStations_2([1 , 13 ,17, 23] , 5));

//Time Complexity: O(n*log(Len)) + O(n), n = size of the given array, Len = length of the answer space.
//Reason: We are applying binary search on the answer space. 
//For every possible answer, we are calling the function numberOfGasStationsRequired() that takes O(n) time complexity. 
//And another O(n) for finding the maximum distance initially.



//BETTER APPROACH
//Priority Queue: Priority queue internally uses the heap data structure. 
//In the max heap implementation, the first element is always the greatest of the elements it contains
//The rest elements are in decreasing orde
class MaxPriorityQueue{
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
        this.queue.sort((a,b) => b.priority - a.priority);
    }

    dequeue(){
        return this.queue.shift();
    }

    front(){
        return this.queue[0]
    }
}

function minimizeMaximumDistanceBetweenGasStations_1(array , k){
    let n = array.length;

    //Creating a new array which contains how many gas stations can be inserted between two array elements
    //There are n elements so gas stations can only be inserted at n - 1 positions
    let howMany = new Array(n-1).fill(0);

    //Creating a priority queue which contains the max section length and the index at which it is inserted
    let priorityQueue = new MaxPriorityQueue();

    //Inserting the difference between the adjacent arrays and the index 
    //The priority queue now contains pairs in the form (distance between consecutive index , index)
    for(let i = 0 ; i < n - 1 ; i++){
        priorityQueue.enqueue({priority : array[i+1] - array[i] , index : i});
    }

    for(let gasStations = 1; gasStations<= k ;gasStations++){
        
        //Finding the max section distance in the priority queue
        const topElement = priorityQueue.dequeue();
        //Getting the index of the element of the max distance
        const sectionIndex = topElement.index;

        //Inserting the gas station at the specified index
        howMany[sectionIndex]++;

        let diff = array[sectionIndex + 1] - array[sectionIndex];
        //Finding the new section length for the inserted gas station
        let sectionLength = diff/ (howMany[sectionIndex] + 1) ;

        //Insert the new section consisting of the inserted gas station along with index
        priorityQueue.enqueue({priority : sectionLength , index : sectionIndex});
    }

    //Returning the top element in the priority queue which contains the maximum distance
    return priorityQueue.front().priority;
}

console.log(minimizeMaximumDistanceBetweenGasStations_1([1,2,3,4,5] , 4));
console.log(minimizeMaximumDistanceBetweenGasStations_1([1,7] , 2));
console.log(minimizeMaximumDistanceBetweenGasStations_1([1 , 13 ,17, 23] , 5));

//Time Complexity: O(nlogn + klogn),  n = size of the given array, k = no. of gas stations to be placed.
//Reason: Insert operation of priority queue takes logn time complexity. 
//O(nlogn) for inserting all the indices with distance values and O(klogn) for placing the gas stations.

//Space Complexity: O(n-1)+O(n-1)
//Reason: The first O(n-1) is for the array to keep track of placed gas stations.
//The second one is for the priority queue.

//BRUTE FORCE METHOD
function minimizeMaximumDistanceBetweenGasStations(array , k){
    let n = array.length;
    let howManyGasStationsPlacedAtCertainIndex = new Array(n - 1).fill(0);
    
    for(let gasStations = 1; gasStations <= k ; gasStations++){
        let maxSectionLen = -1;
        let maxIndex = -1;

        for(let i = 0 ; i < n - 1 ; i++){
            let diff = array[i+1] - array[i];
            let sectionLen = diff / (howManyGasStationsPlacedAtCertainIndex[i] + 1);

            if(sectionLen > maxSectionLen){
                maxSectionLen = sectionLen;
                maxIndex = i;
            }
        }
        howManyGasStationsPlacedAtCertainIndex[maxIndex]++;
    }

    let maximumDistance = -1;
    for(let i = 0 ; i < n - 1 ; i++){
        let diff = array[i + 1] - array[i];
        let sectionLen = diff / (howManyGasStationsPlacedAtCertainIndex[i] + 1);

        maximumDistance = Math.max(maximumDistance , sectionLen);
    }

    return maximumDistance;
}

console.log("\n"+minimizeMaximumDistanceBetweenGasStations([1,2,3,4,5] , 4));
console.log(minimizeMaximumDistanceBetweenGasStations([1,7] , 2));

//Time Complexity: O(k*n) + O(n), n = size of the given array, k = no. of gas stations to be placed.
//Reason: O(k*n) to insert k gas stations between the existing stations with maximum distance. 
//Another O(n) for finding the answer i.e. the maximum distance.
