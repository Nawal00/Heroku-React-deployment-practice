require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./config/route')

const app = express()

mongoose.connect(process.env.MONGODB_URI)
app.use(bodyParser.json())
//middleware
app.use('/api',routes)


app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () => console.log(`Express is running on ${process.env.PORT}`))
