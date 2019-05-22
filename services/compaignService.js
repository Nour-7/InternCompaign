const compaigns = require('../dataStore.js');

module.exports = {
  add(compaign) {
    compaigns.push(compaign);
  },
  find(name) {
    return compaigns.find(c => c.name === name);
  },
  update(compaign, newCompaign) {
    const index = compaigns.indexOf(compaign);
    compaigns[index] = newCompaign;
  },
  getAll() {
    return compaigns;
  },
  delete(compaign) {
    const index = compaigns.indexOf(compaign);
    compaigns.splice(index, 1);
  }
};
