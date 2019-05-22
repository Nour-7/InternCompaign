
const express = require('express')
const validateCompaign = require('./models/Compaign.js')

const app = express()

app.use(express.json())

const compaigns = [
    {
        name: 'sd',
        id: 3,
        kjhn: 3
    },
    {
        name: 'ss',
        id: 2
    },
    {
        name: 'sf',
        id: 1
    }
]
app.get('/', (req, res) => {
    res.send('Hellow world')
})

app.get('/api', (req, res) => {
    res.send('Hellow world')
})

app.get('/api/compaigns', (req, res) => {
    res.send(compaigns)
})

app.post('/api/compaigns', (req, res) => {
    const { error } = validateCompaign(req.body)
    if (error) return res.status(404).send(error.details[0].message)
    const exist = compaigns.find(c => c.name === req.body.name)
    if (exist) return res.status(400).send('The compaign with the given Name already exists.')
    const compaign = req.body
    compaigns.push(compaign)
    res.send(compaign)
})
app.get('/api/compaigns/:name', (req, res) => {
    const compaign = compaigns.find(c => c.name === req.params.name)
    if (!compaign) return res.status(404).send('The compaign with the given Name was not found.')
    res.send(compaign)

})
app.put('/api/compaigns/:name', (req, res) => {
    const compaign = compaigns.find(c => c.name === req.params.name)
    if (!compaign) return res.status(404).send('The compaign with the given Name was not found.')

    const { error } = validateCompaign(req.body)
    if (error) return res.status(400).send(error.details[0].message)



    compaign.name = req.body.name
    res.send(compaign)
})
app.delete('/api/compaigns/:name', (req, res) => {
    const compaign = compaigns.find(c => c.name === req.params.name)
    if (!compaign) return res.status(404).send('The compaign with the given Name was not found.')

    const index = compaigns.indexOf(compaign)
    compaigns.splice(index, 1)
    res.send(compaign)
})


const port = process.env.port || 3000
app.listen(3000, () => console.log(`Lestening on port ${port} ...`))
