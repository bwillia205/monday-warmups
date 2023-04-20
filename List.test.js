import {List, Node} from './List.js';

function testPush(){
    const list = createList(0);
    //test push
    const node = new Node(1);
    list.push(node);
    if(list.head === node){
        console.log('push works!');
    }
}

function testTrim(){
    const empty = createList(0);
    const onlyOne = createList(1);
    const multiple = createList(2);
    const emptyCheck = empty.trim();
    const oneItemCheck = onlyOne.trim();
    const multipleCheck = multiple.trim();
    if(emptyCheck === null){
        console.log('empty trim works!');
    }
    if(oneItemCheck !== null && onlyOne.head === null && oneItemCheck.value === 0){
        console.log(oneItemCheck, 'only one item in the list');
    }
    if(multipleCheck !== null && multiple.head.value === 0 && multipleCheck.value === 1){
        console.log(multipleCheck, 'multiple items in the list');
    }
}

function testPop(){
    const empty = createList(0);
    const onlyOne = createList(1);
    const multiple = createList(2);
    const emptyCheck = empty.pop();
    const oneItemCheck = onlyOne.pop();
    const multipleCheck = multiple.pop();
    if(emptyCheck === null){
        console.log('empty pop works!');
    }
    if(oneItemCheck !== null && onlyOne.head === null && oneItemCheck.value === 0){
        console.log(oneItemCheck, 'only one item in the list');
    }
    if(multipleCheck !== null && multiple.head.value === 1 && multipleCheck.value === 0){
        //TODO - fix the returned node has a next value pointing into the list
        console.log(multipleCheck, 'multiple items in the list');
    }
}

function createList(count){
    let list = new List();
    for(let i=0; i<count; i++){
        list.append(new Node(i));
    }
    return list
}

function run(){
    //setup
    testPush();
    testPop();
    testTrim();
    //test append
    // const node2 = new Node(2);
    // list.append(node2);
    // if(list.tail === node2){
    //     console.log('append works!');
    // }


}
run();