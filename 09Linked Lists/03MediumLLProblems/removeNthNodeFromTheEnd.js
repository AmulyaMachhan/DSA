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