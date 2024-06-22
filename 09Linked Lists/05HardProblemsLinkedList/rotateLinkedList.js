// PROBLEM STATEMENT
// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:
// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

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

// OPTIMAL APPRAOCH
function rotateLinkedList(head , k){
    if(head == null || head.next == null || k == 0 ){
        return head;
    }

    let temp = head;
    let length = 1;

    while(temp.next !== null){
        length++;
        temp = temp.next;
    }
 
    console.log(length);

    temp.next = head;
    k = k % length;
    let end = length - k;

    while(end){
        temp = temp.next;
        end--;
    }

    head = temp.next;
    temp.next = null;

    return head;
}

console.log(rotateLinkedList(head , 2));

// BRUTE FORCE APPROACH
function rotateLinkedList_1(head , k){
    if(head == null || head.next == null || k == 1){
        return head;
    }

    for(let i = 0 ; i < k; i++){
        let temp = head;

        while(temp.next.next !== null){
            temp = temp.next;
        }

        let end = temp.next;
        temp.next = null;
        end.next = head;
        head = end;
    }

    return head; 
}

console.log(rotateLinkedList_1(head , 3));