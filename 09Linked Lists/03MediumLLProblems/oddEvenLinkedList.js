// PROBLEM STATEMENT 
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// Example 2:
// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 
// Constraints:
// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106

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

function oddEvenLinkedList(head){
    let oddNode = new Node(0);
    let odd = oddNode;

    let evenNode= new Node(0);
    let even = evenNode;
    let idx = 1;

    while(!head){
        if(idx%2){
            even.next = head;
            even = even.next;
        }else{
            odd.next = head;
            odd = odd.next;
        }
        head = head.next;
        idx++;
    }

    even.next = null;
    odd.next = evenNode.next;

    return oddNode.next;
}

console.log(oddEvenLinkedList(head));