//BETTER APPROACH
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
    let howMany = new Array(n-1).fill(0);

    let priorityQueue = new MaxPriorityQueue();

    for(let i = 0 ; i < n - 1 ; i++){
        priorityQueue.enqueue({priority : array[i+1] - array[i] , index : i});
    }

    for(let gasStations = 1; gasStations<= k ;gasStations++){
        
        const topElement = priorityQueue.dequeue();
        const sectionIndex = topElement.index;

        howMany[sectionIndex]++;

        let diff = array[sectionIndex + 1] - array[sectionIndex];
        let sectionLength = diff/ (howMany[sectionIndex] + 1) ;

        priorityQueue.enqueue({priority : sectionLength , index : sectionIndex});
    }

    return priorityQueue.front().priority;
}

console.log(minimizeMaximumDistanceBetweenGasStations_1([1,2,3,4,5] , 4));
console.log(minimizeMaximumDistanceBetweenGasStations_1([1,7] , 2));
console.log(minimizeMaximumDistanceBetweenGasStations_1([1 , 13 ,17, 23] , 5));

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
