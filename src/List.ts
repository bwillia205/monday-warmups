import { Node } from './Node';

export class List<T = unknown> {
    head?: Node<T>;
    tail?: Node<T>;

    get isEmpty() {
        return !this.head;
    }

    push(node: Node<T>) {
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

    append(node: Node<T>) {
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

    insertAfter(node: Node<T>, target: Node<T>) {
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

    toArray(): T[] {
        let current = this.head;
        const arr: T[] = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}
