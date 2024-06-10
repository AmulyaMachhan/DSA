function lengthOfAloop(head){
    let x = 0;
    let y = 0;
    let slow = head;
    let fast = head;
    let hasCycle = 0;
    while(fast?.next){
        slow =slow.next;
        fast = fast.next.next;
        x++;
        if(slow === fast){
            hasCycle = true;
        }
    }

    if(!hasCycle)return 0;

    slow = head;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
        x++;
    }
    
    return x;
}