class List {
    constructor(){
        this.head = null
        this.tail = null
    }
    push(value){
        const node = new Node(value);
        // node.next = 
    }

}
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }

}
const node0 = new Node(4);
const node1 = new Node(5);
node0.next = node1;