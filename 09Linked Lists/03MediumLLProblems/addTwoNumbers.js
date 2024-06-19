// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 
// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);
head1.next.next.next.next.next = new Node(6);


let head2 = new Node(9);
head2.next = new Node(8);
head2.next.next = new Node(7);
head2.next.next.next = new Node(6);

// APPROACH 1
// Using Elementary School Addition
function addTwoNumbers(head1 , head2){
    let total = 0;
    let carry = 0;

    let dummy = new Node(0);
    let curr = dummy;

    while(head1 || head2 || carry){
        total = carry;

        if(head1){
            total += head1.val;
            head1 = head1.next;
        }

        if(head2){
            total += head2.val;
            head2 = head2.next;
        }

        let sum = total%10;
        carry = Math.floor(total/10);
        dummy.next = new Node(sum);
        dummy = dummy.next;
    }

    return curr.next;
}

console.log(addTwoNumbers(head1 , head2));

// APPROACH 2
// Using Recursion
function addTwoNumbers_1(head1 , head2 , carry = 0){
    if(head1 == null && head2 == null  &&  carry == 0){
        return null;
    }

    let sum = carry;

    if(head1){
        sum += head1.val;
        head1 = head1.next;
    }

    if(head2){
        sum += head2.val;
        head2 = head2.next;
    }

    carry = Math.floor(sum / 10);
    let dummy = new Node(sum % 10);
    dummy.next= addTwoNumbers_1(head1 , head2 , carry);
    return dummy
}

console.log(addTwoNumbers_1(head1, head2));