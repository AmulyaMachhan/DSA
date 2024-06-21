function addOneToLinkedList(head){
    const reverse = (head) => {
        let temp = head;
        let prev = null;

        while(temp !== null){
            let front = temp.next;
            temp.next = prev;
            prev = temp;
            temp = front;
        }

        return prev;
    }

    const reverseHead = reverse(head);

    let temp = reverseHead;
    let carry = 1;
    while(temp !== null){

        let sum = temp.val + carry;
        temp.val = sum % 10;
        carry = Math.floor( sum / 10);

        if (carry === 0) {
            break;
        }
        
        if(temp.next == null && carry > 0){
            temp.next = new Node(carry);
            carry = 0;
        }

        temp = temp.next;
    }

    return reverse(head);
}