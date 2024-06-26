// PROBLEM STATEMENT
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

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
head.next.next.next.next.next = new Node(6);

function printList(head){
    let temp = head;
    while(temp !== null){
        console.log(temp.val + ' ');
        temp = temp.next;
    }
}
// RECURSIVE OPTIMAL APPROACH - 2
function reverseOfAlinkedList_2(head){
    if(head == null || head.next == null){
        return head;
    }

    let newHead = reverseOfAlinkedList_2(head.next);
    let front = head.next;
    front.next = head;
    head.next = null;

    return newHead;
}

let head3 = reverseOfAlinkedList_1(head);
printList(head3);

// ITERATIVE OPTIMAL APPROACH - 1
function reverseOfAlinkedList_1(head){
    let temp = head;
    let prev = null;

    while(temp !== null){
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }

    return prev;
}

let head1 = reverseOfAlinkedList_1(head);
printList(head1);

// BRUTE FORCE APPROACH
function reverseOfAlinkedList(head){
    let temp = head; 
    let stack = [];

    while(temp !== null){
        stack.push(temp.val);
        temp = temp.next;
    }

    temp = head;

    while(temp !== null){
        temp.val = stack.pop();
        temp = temp.next;
    }

    return head;
}

let head2 = reverseOfAlinkedList(head);
printList(head2);