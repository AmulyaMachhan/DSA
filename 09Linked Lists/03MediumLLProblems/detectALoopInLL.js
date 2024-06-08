class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = third;

//OPTIMAL SOLUTION
function detectALoopInLL(head){
    let slow = head;
    let fast = head;

    while(fast?.next){
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) return true;
    }
    return false;
}

console.log(detectALoopInLL(head));

// BRUTE FORCE SOLUTION 
function detectALoopInLL_1(head){
    let temp = head;
    let nodeMap = new Map();

    while(temp !== null){
        if(nodeMap.has(temp)){
            return true;
        }
        nodeMap.set(temp , true);
        temp = temp.next;
    }

    return false;
}

console.log(detectALoopInLL_1(head));