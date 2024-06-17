// PROBLEM STATEMENT
// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105
 
// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

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

// BETTER APPROACH
// TIME COMPLEXITY = O(N LOG N);
// SPACE COMPLEXITY = O( LOG N) (FOR RECURSION STACK);
function sortLl_1(head){
    if(head == null || head.next == null){
        return head;
    }
    const merge = (left , right) => {
        let dummy = new Node(0);
        let curr = dummy.next;

        while(left && right){
            if(left.val < right.val){
                curr = left;
                left = left.next 
            }else{
                curr = right;
                right = right.next;
            }

            curr = curr.next;
        }

        curr.next = left || right;

        return dummy.next;
    }

    const findMiddleNode = (node) => {
        let slow = node;
        let fast = node.next;

        while(fast?.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    let mid = findMiddleNode(head);
    let rightHead = mid.next;
    mid.next = null;

    let right = sortLL(rightHead);
    let left = sortLL(head);

    return merge(left , right);
}

// BRUTE FORCE APPROACH
// TIME COMPLEXITY = O(N LOG N);
// SPACE COMPLEXITY = O(N);
function sortLL(head){
    if(head == null || head.next == null){
        return head;
    }

    let temp = head;
    const array = [];

    while(temp !== null){
        array.push(temp.val);
        temp = temp.next;
    }

    array.sort((a,b) => a - b);
    temp = head;
    for(let i = 0; i < array.length; i++){
        temp.val = array[i];
        temp = temp.next;
    }

    return head;
}