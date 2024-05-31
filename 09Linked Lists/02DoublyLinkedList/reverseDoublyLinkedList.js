class Node{
    constructor(element){
        this.element = element;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null;
        this.length = 0;
    }

    printList(){
        let array = [];
        let node = this.head;
        while(node !== null){
            array.push(node.element);
            node = node.next;
        }
        
        if(array.length == 1) console.log(array[0]);
        else console.log(array.join(" <--> "));
        return this;
    }
    //Insert node at the end of the list;    
    append(element){
        let node = new Node(element);

        if(this.head == null){
            this.head = node;
            this.tail = node
        }else{
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }

        this.length++;
        this.printList();
    }

    //Insert node at the beginning of the list
    prepend(element){
        let node = new Node(element);

        if(this.head == null){
            this.head = node;
            this.tail = node
        }
        else{
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }

        this.length++;
        this.printList();
    }

    //Insert Element at the specified index
    insert(element , index){
        if(!Number.isInteger(index) || index < 0 || index > this.length){
            console.log(`Invalid index. Current Length is ${this.length}`);
            return this;
        }

        if(index == 0){
            this.prepend(node);
            return this;
        }

        if(index == this.length){
            this.append(node);
            return this;
        }
        
        let newNode = new Node(element);
        let previousNode = this.head;

        for(let i= 1 ; i < index; i++){
            previousNode = previousNode.next;
        }

        let nextNode = previousNode.next;

        newNode.next = nextNode;
        previousNode.next = newNode;
        newNode.previous = previousNode;
        
        if(nextNode){
            nextNode.previous = newNode;
        }

        this.length++;
        this.printList();
    }

    delete(index){
        if(!Number.isInteger(index) || index < 0 || index > this.length){
            console.log(`Invalid index. Current Length is ${this.length}`);
        }

        if(index == 0){
            this.head = this.head.next;
            this.head.previous = null;

            this.length--;
            this.printList();
            return this;
        }

        if(index == this.length - 1){
            this.tail = this.tail.previous;
            this.tail.next = null;

            this.length--;
            this.printList();
            return this;
        }

        let previousNode = this.head;

        for(let i = 1 ; i < index ; i++){
            previousNode = previousNode.next;
        }

        let deleteNode = previousNode.next;
        let nextNode = deleteNode.next;

        previousNode.next = nextNode;
        nextNode.previous = previousNode;

        this.length--;
        this.printList();
        return this;
    }

    convertArrayIntoDoubleLinkedList(array){
        if(array.length === 0){
            console.log("Invalid array")
            return this;
        } 

        let node = new Node(array[0]);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }

        this.length++; 

        for(let i = 1; i < array.length; i++){
            let newNode = new Node(array[i]);
            
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            
            this.length++;
        }
        this.printList();
        return this;
    }
}
// OPTIMAL APPROACH
// Using two pointers 
function reverseDoublyLinkedList_1(array){
    const dl1 = new DoublyLinkedList();
    let head = dl1.convertArrayIntoDoubleLinkedList(array).head;   
    let prev = null;
    let curr = head;

    while(curr !== null){
        let next = curr.next;
        curr.next = prev;
        curr.prev = next;
        prev = curr;
        curr = next;
    }

    dl1.head = prev;
    dl1.printList();
}

reverseDoublyLinkedList_1([1,2,3,4,5]);

// BRUTE FORCE APPROACH
// A brute-force approach involves replacing data in a doubly linked list. First, we traverse the list and store node data in a stack. 
// Then, in a second pass, we assign elements from the stack to nodes, ensuring a reverse order replacement since stacks follow the Last-In-First-Out (LIFO) principle.
function reverseDoublyLinkedList(array){
    let dl = new DoublyLinkedList();
    let head = dl.convertArrayIntoDoubleLinkedList(array).head;

    let stack = [];
    let temp = head;
    while(temp !== null){
        stack.push(temp.element);
        temp = temp.next;
    }

    temp = head;

    while(temp !== null){
        temp.element = stack.pop();
        temp = temp.next;
    }

    dl.printList();
}

reverseDoublyLinkedList([1,2,3,4,5]);