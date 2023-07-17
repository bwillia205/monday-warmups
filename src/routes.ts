import express from 'express';
import { List, Node } from './list';
import { readFile, writeFile } from 'fs/promises';
const fileName = 'list.json';
try {
    readFile(fileName, 'utf8')
} catch (error) {
    writeFile(fileName, '[]', 'utf8');
}

const router = express.Router();

const list = new List();

router.get('/', (req, res) => {
    res.json(list.toArray());
});

router.post('/', (req, res) => {
    const body = req.body;
    const node = new Node(body);

    list.push(node);
    res.status(201).send('OK');
});

export { router };
