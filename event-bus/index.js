const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/events', async (req, res) => {
    const event = req.body;

    await axios.post('http://localhost:4000/events', event);
    await axios.post('http://localhost:4001/events', event);
    await axios.post('http://localhost:4002/events', event);

    res.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log('Broker listening on 4005');
});