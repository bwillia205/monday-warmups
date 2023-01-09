class List {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    push(node){
        const emptyList = !this.head;
        if(emptyList){
            this.head = node;
            this.tail = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }
    append(node){
        const emptyList = !this.head;
        if(emptyList){
            this.push(node);
        }
        this.tail.next = node;
        this.tail = node;
    }
    insertAfter(node, position){
        
    }

}
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

export {
    List,
    Node
};


// SOLID principles
// Single responsibility principle
// Open/Closed - Open to extension but closed to modification

