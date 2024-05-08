class Node{
    constructor(data , next){
        this.data = data;
        this.next = null;
    }
}
// PROBLEM STATEMENT
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// OPTIMAL APPROACH
// TORTOISE HARE METHOD
function middleOfALinkedList_1(head){
    if(head == null || head.next === null){
        return head;
    }

    let fast = head; 
    let slow = head;

    while(fast !== null  && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow.data;
}

//BRUTE FORCE APPROACH
function middleOfALinkedList(head){
    if(head == null || head.next === null){
        return head;
    }

    let temp = head;
    let count = 0;

    while(temp !== null){
        temp = temp.next;
        count++;
    }
    
    let mid = Math.floor(count / 2) + 1;
    temp = head;

    while(temp !== null){
        mid = mid - 1;
        
        if(mid === 0){
            break;
        }

        temp = temp.next;
    }

    return temp.data;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(middleOfALinkedList(head));
console.log(middleOfALinkedList_1(head));