// PROBLEM STATEMENT
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]
 
// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// BRUTE FORCE APPROACH
function removeNthNodeFromTheEnd(head , n){
    let temp = head;
    let length = 0;

    while(temp !== null){
        temp = temp.next;
        length++;
    }
    if(length == n){
        let newHead = head.next;
        head = null;
        return newHead;
    }
    let ans = head;
    for(let i = 0; i < length - n; i++){
        ans = ans.next;
    }

    return ans.val;
}

removeNthNodeFromTheEnd(head , 2);