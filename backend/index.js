const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// API routes for Hotspot, Flag Intervention, and Allocate Resources
app.get('/api/hotspots', (req, res) => {
    res.json({
        message: 'Hotspot data from backend',
        data: [
            { id: 1, location: 'Village A', cases: 5 },
            { id: 2, location: 'Village B', cases: 3 }
        ]
    });
});

app.post('/api/interventions/flag', (req, res) => {
    const { reason } = req.body;
    console.log('Intervention Flagged:', reason);
    res.json({ message: `Intervention for '${reason}' flagged successfully!` });
});

app.post('/api/resources/allocate', (req, res) => {
    const { type, quantity } = req.body;
    console.log('Resources Allocated:', { type, quantity });
    res.json({ message: `Allocated ${quantity} of ${type} successfully!` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
