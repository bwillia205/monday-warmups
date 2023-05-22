import express from 'express';
const router = express.Router();

// import {List, Node} from './List.js';
// const list = new List();

// router.get('/', (req, res)=>{
//     res.json(list);
// });

// router.post('/', (req, res) => {
//     const body = req.body;
//     const node = new Node(body);

//     list.push(node);
//     res.status(201).send('OK');
// });

import pg from 'pg'

const { Pool } = pg

// TODO: End the pg Pool on exit (with await pool.end())
const connectionProperties = {
    host: process.env.POSTGRES_SERVER || 'localhost',
    port: 5432,
    user: 'postgres',
    password: process.env.USER,
    database: 'postgres'
};
console.log(connectionProperties);
const pool = new Pool(connectionProperties);

{
    const res = await pool.query(`
    CREATE TABLE IF NOT EXISTS ListoTron (
        Element VARCHAR
    )
    `);
    // How can we know if the table was created or existed previously
    // console.log(res);
}

const insertListElement = async (element) => {
    const res = await pool.query(`
    INSERT INTO ListoTron (Element)
    VALUES ($1)
    `, [element]);
    // console.log(res);
};

router.get('/', async (req, res) => {
    const queryResult = await pool.query(`
    SELECT Element FROM ListoTron
    `);
    // console.log(queryResult);
    res.json(queryResult.rows.map(e => e.element));
});

router.post('/', async (req, res) => {
    // console.log(req);
    const body = req.body;
    await insertListElement(body);
    res.status(201).send('OK');
});

export { router };
