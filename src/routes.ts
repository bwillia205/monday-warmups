import express from 'express';
import { access, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import { List, Node } from './list';

const filePath = join(__dirname, '../data/list.json');

const router = express.Router();

let list = new List();

router.get('/', async (req, res) => {
    list = await readListFromFile();
    res.json(list.toArray());
});

router.post('/', async (req, res) => {
    const body = req.body;
    const node = new Node(body);

    list.push(node);
    await saveListToFile(list);
    res.status(201).send('OK');
});

async function saveListToFile<T>(list: List<T>, file = filePath) {
    await writeFile(file, JSON.stringify(list.toArray()));
}

async function readListFromFile<T>(file = filePath) {
    // check if file exists if it doesn't create it then read it
    if (!(await fileExists(file))) {
        await saveListToFile(new List());
    }

    const data = await readFile(file, 'utf-8');
    const parsedData = JSON.parse(data);
    const list = new List<T>();
    list.fromArray(parsedData);
    return list;
}

async function fileExists(file = filePath) {
    try {
        await access(file);
        return true;
    } catch (error) {
        return false;
    }
}

export { router };
