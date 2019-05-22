
const joi = require('joi');
const request = require('request');

function validateCompaign(compaign) {
  const schema = {
    name: joi.string().min(2).required(),
    country: joi.string().min(2).required(),
    budget: joi.number().valid(149, 399, 999).required(),
    goal: joi.string().min(2).required(),
    category: joi.string(),
  };
  const result = joi.validate(compaign, schema);
  if (!compaign.category) {
    request.get(`https://ngkc0vhbrl.execute-api.eu-west-1.amazonaws.com/api/?url=https://${compaign.name}.com/`, (error, response, body) => {
      if (error) {
        return console.dir(error);
      }
      compaign.category = JSON.parse(body).category.name;
    });
  }

  return result;
}
module.exports = validateCompaign;
