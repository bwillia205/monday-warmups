class List {
    constructor(){
        this.head = null
        this.tail = null
    }
    push(node){
        node.next = this.head;
        this.head = node;
    }

}
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}


module.exports = {
    List,
    Node
};


// const list = new List();
// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);
// list.push(node1);
// list.push(node2);
// list.push(node3);
// console.log(list);

// SOLID principles
// Single responsibility principle
// Open/Closed - Open to extension but closed to modification

