// PROBLEM STATEMENT
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
// Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

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