export class List<T = unknown> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;

    push(node: Node<T>) {
        const emptyList = !this.head;
        if (emptyList) {
            this.head = node;
            this.tail = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    pop() {
        const emptyList = !this.head;
        if (emptyList) {
            return null;
        }
        const node = this.head;
        const onlyOneNode = this.tail === this.head;
        if (onlyOneNode) {
            this.tail = null;
        }
        this.head = this.head?.next || null;
        return node;
    }

    append(node: Node<T>) {
        const emptyList = !this.head;
        if (emptyList) {
            this.push(node);
            return;
        }
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
    }

    trim() {
        const emptyList = !this.head;
        if (emptyList) {
            return null;
        }
        const node = this.tail;

        const onlyOneNode = this.tail === this.head;
        if (onlyOneNode) {
            this.tail = null;
            this.head = null;
            return node;
        }

        let current = this.head;
        while (current?.next !== this.tail) {
            current = current!.next;
        }

        current.next = null;
        this.tail = current;
        return node;
    }

    insertAfter(node: Node<T>, target: Node<T>) {
        let current = this.head;
        while (current !== null) {
            if (current === target) {
                if (this.tail === target) {
                    this.tail = node;
                }
                node.next = target.next;
                target.next = node;
                return;
            }
            current = current.next;
        }
        //TODO - throw an error if function doesn't return
    }

    toArray() {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    fromArray(array: T[]) {
        array.forEach((value) => {
            this.append(new Node(value));
        });
    }
}

export class Node<T = unknown> {
    value: T;
    next: Node<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}

// SOLID principles
// Single responsibility principle
// Open/Closed - Open to extension but closed to modification
