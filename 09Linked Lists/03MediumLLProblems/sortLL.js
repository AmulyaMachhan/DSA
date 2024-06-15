// BETTER APPROACH
// TIME COMPLEXITY = O(N LOG N);
// SPACE COMPLEXITY = O( LOG N) (FOR RECURSION STACK);
function sortLl_1(head){
    if(head == null || head.next == null){
        return head;
    }
    const merge = (left , right) => {
        let dummy = new Node(0);
        let curr = dummy.next;

        while(left && right){
            if(left.val < right.val){
                curr = left;
                left = left.next 
            }else{
                curr = right;
                right = right.next;
            }

            curr = curr.next;
        }

        curr.next = left || right;

        return dummy.next;
    }

    const findMiddleNode = (node) => {
        let slow = node;
        let fast = node.next;

        while(fast?.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    let mid = findMiddleNode(head);
    let rightHead = mid.next;
    mid.next = null;

    let right = sortLL(rightHead);
    let left = sortLL(head);

    return merge(left , right);
}

// BRUTE FORCE APPROACH
// TIME COMPLEXITY = O(N LOG N);
// SPACE COMPLEXITY = O(N);
function sortLL(head){
    if(head == null || head.next == null){
        return head;
    }

    let temp = head;
    const array = [];

    while(temp !== null){
        array.push(temp.val);
        temp = temp.next;
    }

    array.sort((a,b) => a - b);
    temp = head;
    for(let i = 0; i < array.length; i++){
        temp.val = array[i];
        temp = temp.next;
    }

    return head;
}