class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor( head = null){
        this.head = head;
        this.size = 0;
    }

    //Add element to the last of the list
    add(data){
        let node = new Node(data);
        let current;
         
        if(this.head == null){
            this.head = node;
        }else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }

    //add element to the starting of the list
    append(data){
        let node = new Node(data);
        let current = this.head;

        this.head = node;
        node.next = current;
        this.size++;
    }

    //add element at the given position/index
    insertAt(index , data){
        if(index < 0 || index > this.size){ return console.log("Enter a Valid Position")}
        else{
            let node = new Node(data);
            let current , previous;

            if(index == 0){
                node.next = this.head;
                this.head = node;
            }else{
                current = this.head;
                let it = 0;
                while(it < index){
                    it++;
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.size++;
        };
    }

    //removes an element from the given index;
    removeFrom(index){
        if(index < 0 || index > this.size){
            return console.log("Enter valid position in the list");
        }else{
            let current , previous;
            let it = 0;
            current = this.head;
            previous = current;
            if(index == 0){
                this.head = current.next;
            }else{
                while(it < index){
                    it++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.size--;
            
            return current.data;
        }
    }

    //remove the given element
    removeElement(data){
        let current = this.head;
        let previous = null;

        while(current){
            if(current.data == data){
                if(previous == null){
                    this.head = current.next;
                }else{
                    previous.next = current.next
                }
                this.size--;
                return current.data;
            } 
            previous = current;
            current = current.next;
        }
        return -1;
    }

    //returns index of that particular element
    indexOf(data){
        let current = this.head;
        let index = 0;

        while(current){
            if(current.data == data){
                return index;
            }else{
                current = current.next;
                index++;
            }
        }

        return -1;
    }

    //checks if the list is empty
    isEmpty(){
        return this.size == 0; 
    }
    
    //deleting the entire list
    clear(){
        this.head == null;
    }
    //Prints the entire list;
    printList(){
        let str = "";
        let current = this.head;
        while(current){
            str += current.data + "->";
            current = current.next;
        }
        console.log(str);    
    }

    printSize(){
        console.log(this.size);
    }
}

let l1= new LinkedList();
l1.add(2);
l1.add(3);
l1.add(4);
l1.append(1);
l1.insertAt(0 , 5);
l1.printList();
l1.removeFrom(4); 
l1.printList();
l1.removeElement(2); 
l1.printList();
console.log(l1.indexOf(3))
l1.printSize();

let l2 = new LinkedList(new Node(2));
l2.printList()
