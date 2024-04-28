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
