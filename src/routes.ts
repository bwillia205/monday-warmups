import express from 'express';
// import { List, Node } from './list';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';

const fileName = 'list.json';
// try {
//     readFile(fileName, 'utf8')
// } catch (error) {
//     writeFile(fileName, '[]', 'utf8');
// }

const router = express.Router();

// const list = new List();

const list: string[] = [];

if (existsSync(fileName)) {
    const rawData = readFileSync(fileName, 'utf-8')
    const asObject = JSON.parse(rawData)
    list.push(...asObject)
}
else {
    writeFileSync(fileName, JSON.stringify(list), 'utf-8')
}


router.get('/', (req, res) => {
    // res.json(list.toArray());
    
    res.json(list)
});

router.post('/', async (req, res) => {
    const body = req.body;

    // const node = new Node(body);
    // list.push(node);

    list.push(body)
    await writeFile(fileName, JSON.stringify(list), 'utf-8')

    res.status(201).send('OK');
});

router.delete('/:index(\\d+)', async (req, res) => {
    const index = parseInt(req.params['index'])

    if (index >= list.length) {
        res.status(400).send()
        return
    }

    list.splice(index, 1)
    await writeFile(fileName, JSON.stringify(list), 'utf-8')

    res.status(202).send('OK');
})

export { router };
