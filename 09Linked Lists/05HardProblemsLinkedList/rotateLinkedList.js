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

function rotateLinkedList(head){
    if(head == null || head.next == null || k == 1 ){
        return head;
    }

    let temp = head;
    let length = 0;

    while(temp !== null){
        length++;
        temp = temp.next;
    }

    temp.next = head;
    k = k % length;
    let end = length - k;

    while(end){
        temp = temp.next;
        end--;
    }

    temp.next = head;
    temp.next = null;

    return head;
}