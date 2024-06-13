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

function oddEvenLinkedList(head){
    let oddNode = new Node(0);
    let odd = oddNode;

    let evenNode= new Node(0);
    let even = evenNode;

    while(!head){
        if(head%2){
            evenNode.next = head;
            even = evenNode.next;
        }else{
            oddNode.next = head;
            odd = oddNode.next;
        }
        head = head.next;
    }

    evenNode.next = null;
    oddNode.next = even.next;

    return odd.next;
}