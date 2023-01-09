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
    insertAfter(node, target){
        let current = this.head;
        while(current !== null){
            if(current === target){
                if(this.tail === target){
                    this.tail = node;
                }
                node.next = target.next
                target.next = node;
                return;
            }
            current = current.next;
        }
        //TODO - throw an error if function doesn't return
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

