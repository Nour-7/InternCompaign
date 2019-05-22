const express = require('express');
const compaignService = require('./services/compaignService');
const validateCompaign = require('./models/Compaign.js');

const app = express();
app.use(express.json());

app.get('/api/compaigns', (req, res) => {
  const compaigns = compaignService.getAll();
  res.send(compaigns);
});

app.post('/api/compaigns', (req, res) => {
  const { error } = validateCompaign(req.body);

  if (error) return res.status(404).send(error.details[0].message);

  const exist = compaignService.find(req.body.name);

  if (exist) return res.status(400).send('The compaign with the given Name already exists.');

  compaignService.add(req.body);

  res.send.status(200).message('Created successfully');
});
app.get('/api/compaigns/:name', (req, res) => {
  const compaign = compaignService.find(req.params.name);

  if (!compaign) return res.status(404).send('The compaign with the given Name was not found.');

  res.send(compaign);
});
app.put('/api/compaigns/:name', (req, res) => {
  const compaign = compaignService.find(req.params.name);

  if (!compaign) return res.status(404).send('The compaign with the given Name was not found.');

  const { error } = validateCompaign(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  compaignService.update(compaign, req.body);

  res.send(compaign);
});
app.delete('/api/compaigns/:name', (req, res) => {
  const compaign = compaignService.find(req.params.name);

  if (!compaign) return res.status(404).send('The compaign with the given Name was not found.');

  compaignService.delete(compaign);

  res.send.status(200);
});


const port = process.env.port || 3000;
app.listen(3000, () => console.log(`Lestening on port ${port} ...`));
