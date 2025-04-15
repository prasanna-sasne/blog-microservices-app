const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const events = [];

const services = [
    'http://localhost:4000/events',
    'http://localhost:4001/events',
    'http://localhost:4002/events',
    'http://localhost:4003/events'
];

app.post('/events', async (req, res) => {
    const event = req.body;
    events.push(event);

    await Promise.all(services.map(async (url) => {
        try {
            await axios.post(url, event);
        } catch (err) {
            console.error(`Error sending event to ${url}:`, err.message);
        }
    }));

    res.send({ status: 'OK' });
});

// Real implementation of event buses are complicated, this is only for testing
// To synchronize the service after they have been out of service, down etc
app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('Broker listening on 4005');
});