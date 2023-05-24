const fetch = require('node-fetch');

fetch('http://localhost:3000/RetrievePatients')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then(data => {
    // Process the received data as needed
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
