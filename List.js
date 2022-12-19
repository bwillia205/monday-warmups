class List {
    constructor(){
        this.head = null
    }
    push(node){
        node.next = this.head;
        this.head = node;
    }
    append(node){
        const emptyList = !this.head;
        if(emptyList){
            this.head = node;
            return;
        }
        let current = this.head;
        const currentNextNodeIsEmpty = current.next === null;
        while(!currentNextNodeIsEmpty){
            current = current.next;
        }
        current.next = node;
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


// SOLID principles
// Single responsibility principle
// Open/Closed - Open to extension but closed to modification

