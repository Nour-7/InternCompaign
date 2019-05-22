const compaigns = require('../dataStore.js')
module.exports = {
    add(compaign) {
        compaigns.push(compaign)
    },
    find(name) {
        return compaigns.find(c => c.name === name)
    },
    update(compaign, newCompaign) {
        compaign = newCompaign
    },

}