const compaignService = require('../services/compaignService');

function groupBy(xs, key) {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}


exports.getReportData = (req, res) => {
  const compaigns = compaignService.getAll();

  const { dimensions } = req.query;
  const { fields } = req.query;
  const { duration } = req.query;
  console.log(req.query);


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
  // const picked = (({ fields }) => ({ fields }))(compaigns);

  const grouped = getFields(groupBy(compaigns, dimensions));
  console.log(grouped);
  res.send(grouped);
};
