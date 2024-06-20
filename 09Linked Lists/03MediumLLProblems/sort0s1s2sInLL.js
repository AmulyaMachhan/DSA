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