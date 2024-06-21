// PROBLEM STATEMENT
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list. 
// If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:
// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000
 
// Follow-up: Can you solve the problem in O(1) extra memory space?


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

function reverseLLInGroupOfKSize(head , k){
    if(head === null) return null;
    
    const reverse = (node) => {
        let temp = node;
        let prev = null;

        while(temp !== null){
            let nextNode = temp.next;
            temp.next = prev;
            prev = temp;
            temp = nextNode;
        }

        return prev;
    }

    let tail = head;
    for(let i = 1; i < k ; i++){
        tail = tail.next;
        if(tail == null){
            return head;
        }
    }

    let next = tail.next;
    tail.next = null;

    reverse(next);

    head.next = reverseLLInGroupOfKSize(next , k)
    
    return tail;
}

console.log(reverseLLInGroupOfKSize(head , 3));