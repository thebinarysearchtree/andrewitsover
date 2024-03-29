import express from 'express';
import { join } from 'path';
import { writeFile } from 'fs/promises';

const app = express();

let i = 1;

app.use((req, res, next) => {
  if (req.url.endsWith('.json')) {
    return res.sendStatus(403);
  }
  next();
});

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

app.get('/quietone/technical', (req, res) => {
  const path = join(import.meta.dirname, 'technical.html');
  res.sendFile(path);
});

app.get('/quietone/quietone.dmg', (req, res) => {
  const path = join(import.meta.dirname, 'quietone.dmg');
  res.sendFile(path);
});

app.get('/quietone/quietone.exe', (req, res) => {
  const path = join(import.meta.dirname, 'quietone.exe');
  res.sendFile(path);
});

app.get('/quietone/trial', (req, res) => {
  const agent = req.get('user-agent');
  if (agent.includes('Macintosh')) {
    return res.redirect('./quietone.dmg');
  }
  else if (agent.includes('Windows')) {
    return res.redirect('./quietone.exe');
  }
  else {
    return res.redirect('/quietone');
  }
});

app.post('/quietone/submit', async (req, res) => {
  await writeFile(`message${i}.json`, JSON.stringify(req.body));
  i++;
  return res.redirect('/quietone');
});

const server = app.listen(3000);

export default server;
