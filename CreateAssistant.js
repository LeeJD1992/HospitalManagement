const express = require('express');
const port = 3000;

const app = express();

// Parsing middleware
app.use(express.urlencoded({ extended: true }));

// Route for registering new assistant
app.post('/CreateAssistant', (req, res) => {
    // Process form data
    const { name, email, phone, pwd } = req.body;

    // Redirect to a success page 
    res.redirect('/welcome.html');
});

// 404 error handling
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
});

// Server Listening
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
