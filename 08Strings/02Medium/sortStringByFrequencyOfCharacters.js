//PROBLEM STATEMENT
//Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// BETTER APPROACH
class MaxPriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    enqueue(element) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }
  
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
  
        const root = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown(0);
  
        return root;
    }
  
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.heap[0];
    }
  
    isEmpty() {
        return this.heap.length === 0;
    }
  
    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
  
        if (parentIndex >= 0 && this.heap[parentIndex][0] < this.heap[index][0]) {
            this.swap(index, parentIndex);
            this.heapifyUp(parentIndex);
        }
    }
  
    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let maxChildIndex = index;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][0] > this.heap[maxChildIndex][0]) {
            maxChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] > this.heap[maxChildIndex][0]) {
            maxChildIndex = rightChildIndex;
        }
  
        if (maxChildIndex !== index) {
            this.swap(index, maxChildIndex);
            this.heapifyDown(maxChildIndex);
        }
    }
  
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
  

function sortStringByFrequencyOfCharacters_1(string){
    const map = new Map();
    const priorityQueue = new MaxPriorityQueue();

    for(let i = 0 ; i < string.length ; i++){
        if(map.has(string[i])) map.set(string[i] , map.get(string[i]) + 1);
        else map.set(string[i] , 1); 
    }

    map.forEach((key , value) => priorityQueue.enqueue([key , value]));

    console.table(priorityQueue);
    let ans = "";
    while(!priorityQueue.isEmpty()){
        let [freq , char] = priorityQueue.dequeue();
        ans += char.repeat(freq);
    }
    return ans;
}

console.log(sortStringByFrequencyOfCharacters_1("tree"));

// Time Complexity:
// Counting the frequency of each character takes O(n) time, where n is the length of the input string.
// Enqueuing the character-frequency pairs into the priority queue takes O(k log k) time, where k is the number of unique characters.
// Dequeuing elements from the priority queue and building the result string takes O(k log k) time, as the dequeue operation has a time complexity of O(log k), and it is performed k times.
// Therefore, the overall time complexity is O(n + k log k).

// Space Complexity:
// The map data structure is used to store the character frequencies, which takes O(k) space, where k is the number of unique characters in the input string.
// The priorityQueue object takes O(k) space, as it stores the character-frequency pairs.
// The resulting ans string takes O(n) space, where n is the length of the input string.
// Therefore, the overall space complexity is O(k + n).


// BRUTE FORCE APPROACH
function sortStringByFrequencyOfCharacters(string){
    let frq = {};
    for(let i = 0 ; i < string.length ; i++){
        if(frq[string[i]]) frq[string[i]]++
        else frq[string[i]] = 1;
    }

    let frqArray = Object.entries(frq);

    frqArray.sort((a, b) => b[1] - a[1]);

    let sortedString = "";
    for(let [char , freq] of frqArray){
        sortedString += char.repeat(freq);
    }

    return sortedString;
}

console.log(sortStringByFrequencyOfCharacters("tree"));