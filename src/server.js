const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.post('/uploadfile', async (req, res) => {
  try {
    const response = await fetch('https://research-project-h4fb.onrender.com/uploadfile/', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: req.body,
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
