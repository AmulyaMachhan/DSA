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

// OPTIMAL APPROACH
// TORTOISE HARE METHOD
function palindromeLinkedList(head){
    let slow = head;
    let fast = head;

    while(fast?.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let newHead = reverseOfAlinkedList(slow);

    let first = head;
    let second = newHead;

    while(second !== null){
        if(first.val !== second.val){
            return false;
        }
        first = first.next;
        second = second.next;
    }

    return true;
}

function reverseOfAlinkedList(head){
    let temp = head;
    let prev = null;
    let next = null;
    while(temp !== null){
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }

    return prev;
}
console.log(palindromeLinkedList(head));

// BRUTE FORCE APPROACH
function palindromeLinkedList_1(head){
    let st = [];
    let temp = head;

    while(!temp){
        st.push(temp.val);
        temp = temp.next;
    }

    temp = head;

    while(!temp){
        if(temp.val !== st.pop()){
            return false;
        }
        temp = temp.next;
    }

    return true;
}

console.log(palindromeLinkedList_1(head));