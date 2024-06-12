// PROBLEM STATEMENT
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const head = new Node(1);
    head.next = new Node(5);
    head.next.next = new Node(2);
    head.next.next.next = new Node(5);
    head.next.next.next.next = new Node(1);

function palindromeLinkedList(head){
    let slow = head;
    let fast = head;

    while(fast?.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow= slow.next;
    fast = head;
    while(slow.next){
        if(slow !== fast){
            return false;
        }

        slow = slow.next;
        fast = fast.next;
    }

    return true;
}

console.log(palindromeLinkedList(head));