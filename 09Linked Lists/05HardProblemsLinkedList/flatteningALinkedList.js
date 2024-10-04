function flatteningALinkedList(head){
    let temp = head;

    while(temp !== null){
        if(temp.child){
            let next = temp.next;

            while(temp.child){
                temp.next = temp.child;
                temp = temp.child
            }
            
            temp.next = next;
            temp = temp.next;
        }
    }
}