const compaignService = require('../services/compaignService');

// Group compaigns data with dimentions
function groupBy(xs, key) {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

// Preparing report data
exports.getReportData = (req, res) => {
  const compaigns = compaignService.getAll();
  if (Object.keys(req.query).length === 0 && req.query.constructor === Object) return res.send(compaigns);
  const { dimensions } = req.query;
  const { fields } = req.query;
  const { duration } = req.query;

  // Only show the wanted fields
  function getFields(g) {
    const groupKeys = Object.keys(g);
    const fieldArray = fields.split(',');

    groupKeys.forEach((gk) => {
      g[gk] = g[gk].map((obj) => {
        const output = {};
        fieldArray.forEach((element) => {
          output[element] = obj[element];
        });
        return output;
      });
    });
    return g;
  }

  const grouped = getFields(groupBy(compaigns, dimensions));
  console.log(grouped);
  res.send(grouped);
};
