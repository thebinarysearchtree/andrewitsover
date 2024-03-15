import express from 'express';

const app = express();

app.use('/', express.static('./'));

app.use(express.urlencoded({ extended: true }));

app.post('/api/contact', async (req, res) => {
  console.log(req.body);
});

const server = app.listen(3000);

export default server;
