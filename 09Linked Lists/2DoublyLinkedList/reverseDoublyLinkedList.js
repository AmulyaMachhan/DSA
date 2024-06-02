import { Node , DoublyLinkedList } from "./DoublyLinkedList";

function reverse(array){
    let dl = new DoublyLinkedList;
    dl.convertArrayIntoDoubleLinkedList(array);
}

console.log(reverse([1,2,3,4,5,6]));