import express from 'express';
import { router } from './routes.js';
const app = express();
const port = process.env['PORT'] || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/list', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
