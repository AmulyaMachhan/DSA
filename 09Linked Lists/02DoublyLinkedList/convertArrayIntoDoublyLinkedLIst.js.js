class Node{
    constructor(element , prev , next){
        this.element = element;
        this.prev = prev;
        this.next = next;

    }
}
function convertArrayIntoDoublyLinkedList(array){
    let head = new Node(array[0]);
    let back = head;

    for(let i = 1; i < array.length; i++){
        let temp = new Node(array[i] , back , null);

        back.next = temp;
        back = temp;
    }

    return head;
}

function printList(head){
    let arr = [];
    while(head !== null){
        arr.push(head.element);
        head = head.next;
    }
    console.log(arr.join(" <-> "))
}

let head = convertArrayIntoDoublyLinkedList([1,2,3,4,5,6,7,8,9]);
printList(head);