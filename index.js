const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
  const { email, pwd } = req.body;
  if (email === 'admin@example.com' && pwd === 'password') {
    res.redirect('/welcome.html');
  } else {
    res.redirect('/login.html');
  }
});

app.get('/CreateAssistant.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'CreateAssistant.html'));
});

app.get('/CreateAssistant.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'CreateAssistant.js'));
});

app.get('/welcome.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
