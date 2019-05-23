const express = require('express');
const compaignController = require('./controller/compaignController');
const reportController = require('./controller/reportController');


const app = express();
app.use(express.json());
app.use('/report', express.static(`${__dirname}/views/index.html`));
app.use('/script', express.static(`${__dirname}/views/script.js`));

app.get('/api/compaigns', compaignController.getAll);

app.post('/api/compaigns', compaignController.add);

app.get('/api/compaigns/:name', compaignController.getByName);

app.put('/api/compaigns/:name', compaignController.update);

app.delete('/api/compaigns/:name', compaignController.delete);

app.get('/api/reportData', reportController.getReportData);


const port = process.env.port || 3000;
app.listen(3000, () => console.log(`Lestening on port ${port} ...`));
