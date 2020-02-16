require('dotenv').config()
const express = require('express')
// const massive = require('massive')
// const session = require('express-session')
const { SERVER_PORT } = process.env
const fetchCtrl = require('./controllers/FetchController')

const app = express()

app.use(express.json())

app.get('/api/years', fetchCtrl.getYears)
app.get('/api/makes/:year', fetchCtrl.getMakes)
app.get('/api/models/', fetchCtrl.getModels)
app.get('/api/trims/', fetchCtrl.getTrims)

app.listen(SERVER_PORT, () => console.log(`Self destruct in ${SERVER_PORT}`))