import {List, Node} from './List.js';

function testPush(){

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
    const list = new List();

    //test push
    const node1 = new Node(1);
    list.push(node1);
    if(list.head === node1){
        console.log('push works!');
    }

    //test append
    const node2 = new Node(2);
    list.append(node2);
    if(list.tail === node2){
        console.log('append works!');
    }


}
run();