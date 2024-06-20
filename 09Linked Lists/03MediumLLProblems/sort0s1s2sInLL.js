function sort0s1s2s(head){
    if(head === null || head.next == null){
        return head;
    }

    const merge = (left , right) => {
        let dummy = new Node(0);
        let curr = dummy.next;

        while(left && right){
            if(left.val < right.val){
                curr = left;
                left = left.next;
            }else{
                curr = right;
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