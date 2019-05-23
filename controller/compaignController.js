const compaignService = require('../services/compaignService');
const validateCompaign = require('../models/Compaign.js');


exports.getAll = (req, res) => {
  const compaigns = compaignService.getAll();

  res.send(compaigns);
};

exports.add = (req, res) => {
  const { error } = validateCompaign(req.body);

  if (error) return res.status(404).send(error.details[0].message);

  const exist = compaignService.find(req.body.name);

  if (exist) return res.status(400).send('The compaign with the given Name already exists.');

  compaignService.add(req.body);

  res.status(200).send('Created successfully');
};

exports.getByName = (req, res) => {
  const compaign = compaignService.find(req.params.name);

  if (!compaign) return res.status(404).send('The compaign with the given Name was not found.');

  res.send(compaign);
};
exports.update = (req, res) => {
  const compaign = compaignService.find(req.params.name);

  if (!compaign) return res.status(404).send('The compaign with the given Name was not found.');

  const { error } = validateCompaign(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  compaignService.update(compaign, req.body);

  res.status(200).send('Updated successfully');
};
exports.delete = (req, res) => {
  const compaign = compaignService.find(req.params.name);

  if (!compaign) return res.status(404).send('The compaign with the given Name was not found.');

  compaignService.delete(compaign);

  res.status(200).send.message('Deleted successfully');
};
