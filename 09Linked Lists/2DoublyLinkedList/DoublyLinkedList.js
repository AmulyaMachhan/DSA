class Node{
    constructor(element){
        this.element = element;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value : value,
            previous : null,
            next : null
        }
        this.length = 1;
        this.tail = this.head;
    }

    
    append(element){
        let node = new Node(element);

        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;

        this.length++
    }
}