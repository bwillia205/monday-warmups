import { List, Node } from './list';

describe('List', () => {
    it('should create a new list', () => {
        const list = new List();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
    });

    it('should push a node to the list', () => {
        const list = new List();
        const node = new Node(1);
        list.push(node);
        expect(list.head).toBe(node);
        expect(list.tail).toBe(node);
    });

    it('should push multiple nodes to the list', () => {
        const list = new List();
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);

        list.push(node1);
        list.push(node2);
        list.push(node3);

        expect(list.toArray()).toEqual([3, 2, 1]);
    });
});
