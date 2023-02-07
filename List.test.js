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


function testPop(){
    const empty = createList(0);
    const onlyOne = createList(1);
    const multiple = createList(2);
    const emptyCheck = empty.pop();
    if(emptyCheck === null){
        console.log('empty pop works!')
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

    //test append
    // const node2 = new Node(2);
    // list.append(node2);
    // if(list.tail === node2){
    //     console.log('append works!');
    // }


}
run();