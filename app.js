const express = require('express');
const compaignController = require('./controller/compaignController');
const reportController = require('./controller/reportController');

// Using express.js 
const app = express();
app.use(express.json());

// Seting path for viewing chart
app.use('/report', express.static(`${__dirname}/views/index.html`));
app.use('/script', express.static(`${__dirname}/views/script.js`));

// Http request
app.get('/api/compaigns', compaignController.getAll);
app.post('/api/compaigns', compaignController.add);
app.get('/api/compaigns/:name', compaignController.getByName);
app.put('/api/compaigns/:name', compaignController.update);
app.delete('/api/compaigns/:name', compaignController.delete);
app.get('/api/reportData', reportController.getReportData);

const port = process.env.port || 3000;
app.listen(3000, () => console.log(`Lestening on port ${port} ...`));