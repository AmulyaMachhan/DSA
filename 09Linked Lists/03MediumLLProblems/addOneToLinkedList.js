// PROBLEM STATEMENT
// A number n is represented in Linked List such that each digit corresponds to a node in linked list. 
// You need to add 1 to it. 
// Returns the head of the modified linked list. The driver code prints the number.
// Note: The head represents the left-most digit of the number.

// Examples :
// Input: LinkedList: 4->5->6
// Output: 457
// Explanation: 4->5->6 represents 456 and when 1 is added it becomes 457. 

// Input: LinkedList: 1->2->3
// Output: 124 
// Explanation:  1->2->3 represents 123 and when 1 is added it becomes 124. 

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 <= n <= 1021

class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let head = new Node(9);
head.next = new Node(9);
head.next.next = new Node(9);

function addOneToLinkedList(head){
    const reverse = (head) => {
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

    const reverseHead = reverse(head);

    let temp = reverseHead;
    let carry = 1;
    while(temp !== null){

        let sum = temp.val + carry;
        temp.val = sum % 10;
        carry = Math.floor( sum / 10);

        if (carry === 0) {
            break;
        }

        if(temp.next == null && carry > 0){
            temp.next = new Node(carry);
            carry = 0;
        }

        temp = temp.next;
    }

    return reverse(head);
}

console.log(addOneToLinkedList(head));