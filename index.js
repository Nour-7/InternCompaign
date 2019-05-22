const express = require('express');
const compaignController = require('./controller/compaignController');
const reportController = require('./controller/reportController');


const app = express();
app.use(express.json());

app.get('/api/compaigns', compaignController.getAll);

app.post('/api/compaigns', compaignController.add);

app.get('/api/compaigns/:name', compaignController.getByName);

app.put('/api/compaigns/:name', compaignController.update);

app.delete('/api/compaigns/:name', compaignController.delete);

app.get('/api/compaigns/report', reportController.getReportData);

const port = process.env.port || 3000;
app.listen(3000, () => console.log(`Lestening on port ${port} ...`));
