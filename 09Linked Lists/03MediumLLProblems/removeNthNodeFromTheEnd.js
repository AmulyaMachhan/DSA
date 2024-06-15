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