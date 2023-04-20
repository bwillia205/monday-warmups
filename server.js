import express from 'express';
const app = express()
const port = 3000
import {router} from './routes.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/list', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})