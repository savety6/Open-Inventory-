const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors({origin: 'http://localhost:5173'}));

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})  