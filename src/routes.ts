import express from 'express';

import { join } from 'path';

import { FileDB } from './file-db';
import { List, Node } from './list';

const filePath = join(__dirname, '../data/list.json');

const router = express.Router();

let list = new List();

const db = new FileDB(filePath);

router.get('/', async (req, res) => {
    list = await db.read();
    res.json(list.toArray());
});

router.post('/', async (req, res) => {
    const body = req.body;
    const node = new Node(body);

    list.push(node);
    await db.write(list);
    res.status(201).json(list.toArray());
});

export { router };
