const compaignService = require('../services/compaignService');

exports.getReportData = (req, res) => {
  const compaigns = compaignService.getAll();
  res.send(compaigns);
};
