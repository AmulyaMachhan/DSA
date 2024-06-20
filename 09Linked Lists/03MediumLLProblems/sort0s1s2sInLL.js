// PROBLEM STATEMENT
// Given a linked list of N nodes where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to head side, 2s at the end of the linked list, and 1s in the mid of 0s and 2s.

// Example 1:
// Input:
// N = 8
// value[] = {1,2,2,1,2,0,2,2}
// Output: 0 1 1 2 2 2 2 2
// Explanation: All the 0s are segregated
// to the left end of the linked list,
// 2s to the right end of the list, and
// 1s in between.

// Example 2:
// Input:
// N = 4
// value[] = {2,2,0,1}
// Output: 0 1 2 2
// Explanation: After arranging all the
// 0s,1s and 2s in the given format,
// the output will be 0 1 2 2.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(N).

// Constraints:
// 1 <= N <= 106

class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let head = new Node(2);
head.next = new Node(0);
head.next.next = new Node(0);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);
head.next.next.next.next.next = new Node(1); 

// OPTIMAL APPROACH
function sort0s1s2s_2(head){
    let zerosCount = 0;
    let onesCount = 0;
    let twosCount = 0;

    let temp = head;
    while(temp !== null){
        if(temp.val == 0){
            zerosCount++
        }else if(temp.val == 1){
            onesCount++;
        }else if(temp.val == 2){
            twosCount++;
        }

        temp = temp.next;
    }

    temp = head;

    while(temp !== null){
        if(zerosCount > 0){
            temp.val = 0;
            zerosCount--;
        }else if(onesCount > 0){
            temp.val = 1;
            onesCount--;
        }else if(twosCount > 0){
            temp.val = 2;
            twosCount--;
        }

        temp = temp.next;
    }

    return head;
}
console.log(sort0s1s2s_2(head));

// BETTER APPROACH
// By changing Links
function sort0s1s2s_1(head){
    let zeroNode = new Node(0);
    let onesNode = new Node(0);
    let twosNode = new Node(0);

    let zero = zeroNode;
    let ones = onesNode;
    let twos = twosNode;

    while(head !== null){
        if(head.val == 0){
            zero.next = head;
            zero = zero.next; 
        }else if(head.val == 1){
            ones.next= head;
            ones = ones.next;
        }else if(head.val == 2){
            twos.next = head;
            twos = twos.next;
        }

        head = head.next;
    }

    zero.next = onesNode.next;
    if(onesNode.next === null){
        zero.next = twosNode.next;
    }else{
        ones.next = twosNode.next;
    }
    twos.next = null;

    return (zeroNode.next !== null) ? zeroNode.next : (onesNode.next == null) ? onesNode.next : twosNode.next ;
}

console.log(sort0s1s2s_1(head));

// BRUTE FORCE APPROACH 
// Using a sorting algorithm
function sort0s1s2s(head){
    if(head === null || head.next == null){
        return head;
    }

    const merge = (left , right) => {
        let dummy = new Node(0);
        let curr = dummy;

        while(left && right){
            if(left.val < right.val){
                curr.next = left;
                left = left.next;
            }else{
                curr.next = right;
                right = right.next;
            }

            curr = curr.next;
        }

        curr.next = left || right;

        return dummy.next;
    }

    const findMiddle = (node) => {
        let slow = head;
        let fast = head.next;

        while(fast?.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
    let mid = findMiddle(head);
    let rightHead = mid.next;
    mid.next = null;

    let sortedLeft = sort0s1s2s(head);
    let sortedRight = sort0s1s2s(rightHead);

    return merge(sortedLeft , sortedRight);
}

console.log(sort0s1s2s(head));