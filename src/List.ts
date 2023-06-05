import { Node } from './Node';

export class List {
    head?: Node;
    tail?: Node;

    get isEmpty() {
        return !this.head;
    }

    push(node: Node) {
        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    pop() {
        if (this.isEmpty) {
            return undefined;
        }
        const node = this.head;
        const onlyOneNode = this.tail === this.head;
        if (onlyOneNode) {
            this.tail = undefined;
        }
        this.head = this.head!.next;
        return node;
    }

    append(node: Node) {
        if (this.isEmpty) {
            this.push(node);
            return;
        }

        // options `!` operator or validate that this.tail is not null
        this.tail!.next = node;
        this.tail = node;
    }

    trim() {
        if (this.isEmpty) {
            return undefined;
        }
        const node = this.tail;

        const onlyOneNode = this.tail === this.head;
        if (onlyOneNode) {
            this.tail = undefined;
            this.head = undefined;
            return node;
        }

        let current = this.head;
        while (current?.next !== this.tail) {
            current = current?.next;
        }
        current!.next = undefined;
        this.tail = current;
        return node;
    }

    insertAfter(node: Node, target: Node) {
        let current = this.head;
        while (current) {
            if (current === target) {
                if (this.tail === target) {
                    this.tail = node;
                }
                node.next = target.next;
                target.next = node;
                return;
            }
            current = current?.next;
        }
        //TODO - throw an error if function doesn't return
    }

    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}
