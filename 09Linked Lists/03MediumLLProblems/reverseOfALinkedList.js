class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

function printList(head){
    let temp = head;
    while(temp !== null){
        console.log(temp.val + ' ');
        temp = temp.next;
    }
}


// BRUTE FORCE APPROACH
function reverseOfAlinkedList(head){
    let temp = head; 
    let stack = [];

    while(temp !== null){
        stack.push(temp.val);
        temp = temp.next;
    }

    temp = head;

    while(temp !== null){
        temp.val = stack.pop();
        temp = temp.next;
    }

    return head;
}

let head2 = reverseOfAlinkedList(head);
printList(head2);