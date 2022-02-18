import express from 'express';

const app = express();
const port = process.env.PORT || '8000';

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.listen(port, () => {
  console.info(`Listening to requests on http://localhost:${port}`);
});