export class Node<T = unknown> {
    value: T;
    next?: Node<T>;
    constructor(value: T) {
        this.value = value;
    }
}
