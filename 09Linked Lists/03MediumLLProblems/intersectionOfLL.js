// PROBLEM STATEMENT
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
// Note that the linked lists must retain their original structure after the function returns.

// Custom Judge:
// The inputs to the judge are given as follows (your program is not given these inputs):
// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

// Example 1:
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.

// Example 2:
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

// Example 3:
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.
 

// Constraints:
// The number of nodes of listA is in the m.
// The number of nodes of listB is in the n.
// 1 <= m, n <= 3 * 104
// 1 <= Node.val <= 105
// 0 <= skipA < m
// 0 <= skipB < n
// intersectVal is 0 if listA and listB do not intersect.
// intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.
 
// Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?

class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);
head1.next.next.next.next.next = new Node(6);


let head2 = new Node(9);
head2.next = new Node(8);
head2.next.next = new Node(7);
head2.next.next.next = head1.next.next.next

// BETTER APPROACH
// Using the difference in length 
// Approach:
// We will reduce the search length. This can be done by searching the length of the shorter linked list. How? Let’s see the process.

// 1. Find the length of both lists.
// 2. Find the positive difference between these lengths.
// 3. Move the dummy pointer of the larger list by the difference achieved. This makes our search length reduced to a smaller list length.
// 4. Move both pointers, each pointing two lists, ahead simultaneously if both do not collide.

// BETTER APPROACH 
// Using hashing 
function intersectionOfLinkedLists_1(head1 , head2){
    let set = new Set();

    let temp = head1;
    while(temp !== null){
        set.add(temp);
        temp = temp.next;
    }

    while(head2 !== null){
        if(set.has(head2)){
            return head2;
        }
        head2 = head2.next;
    }

    return 0;
}

console.log(intersectionOfLinkedLists(head1 , head2));

// BRUTE FORCE APPROACH
function intersectionOfLinkedLists(head1, head2){

    while(head2 !== null){
        let temp1 = head1;
        while(temp1 !== null){
            if(temp1 == head2){
                return head2;
            }
            temp1 = temp1.next;
        }
        head2 = head2.next;
    }
    return 0;
}

console.log(intersectionOfLinkedLists(head1 , head2));