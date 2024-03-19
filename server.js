import express from 'express';
import { join } from 'path';
import { writeFile } from 'fs/promises';

const app = express();

let i = 1;

app.use('/', express.static('./'));

app.use(express.urlencoded({ extended: true }));

app.get('/quietone', (req, res) => {
  const path = join(import.meta.dirname, 'quietone.html');
  res.sendFile(path);
});

app.get('/quietone/contact', (req, res) => {
  const path = join(import.meta.dirname, 'contact.html');
  res.sendFile(path);
});


app.get('/quietone/privacy', (req, res) => {
  const path = join(import.meta.dirname, 'privacy.html');
  res.sendFile(path);
});

app.get('/quietone/help', (req, res) => {
  const path = join(import.meta.dirname, 'help.html');
  res.sendFile(path);
});

app.post('/quietone/submit', async (req, res) => {
  await writeFile(`message${i}.json`, JSON.stringify(req.body));
  i++;
  return res.redirect('/quietone?submit=true');
});

const server = app.listen(3000);

export default server;
