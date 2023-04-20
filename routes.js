import {List, Node} from './List.js';
import express from 'express';
const router = express.Router();

const list = new List();

router.get('/', (req, res)=>{
    res.json(list);
});

router.post('/', (req, res) => {
    const body = req.body;
    const node = new Node(body);

    list.push(node);
    res.status(201).send('OK');
})

export { router };
