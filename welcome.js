document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#panel li button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.getAttribute('data-value');
      window.location.href = page;
    });
  });
});

const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.get('/addDoctor.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'addDoctor.html'));
});

app.get('/addMedicine.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'addMedicine.html'));
});

app.get('/addPatient.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'addPatient.html'));
});

app.get('/discharge.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'discharge.html'));
});

app.get('/viewDoctors.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'viewDoctors.html'));
});

app.get('/viewMedicine.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'viewMedicine.html'));
});

app.get('/viewPatients.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'viewPatients.html'));
});

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
