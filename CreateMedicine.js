const express = require('express');
const app = express();

// Set CORS headers to allow cross-domain requests from anywhere
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.options('*', (req, res) => {
    res.sendStatus(200);
});

app.post('/', (req, res) => {
    const { name, price, count } = req.body;

   
    // Simulate successful response
    res.status(200).send('SUCCESSFUL');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
