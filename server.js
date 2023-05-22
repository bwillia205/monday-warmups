import express from 'express';
const app = express()
const port = process.env.PORT || 3000;
import { router } from './routes.js';


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/list', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// Required for CTRL+C to work in docker
process.on('SIGINT', function() {
  process.exit();
});
// Required for CTRL+C to work in docker-compose
process.on('SIGTERM', function() {
  process.exit();
});
