require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/wwewrestlers')

const wrestlerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  realName: { type: String, required: true},
  image: { type: String, required: true },
  weight: { type: String},
  highlights: { type: String},
  from: { type: String},
  signatureMoves: { type: Array }
})

const Wrestler = mongoose.model('wrestler', wrestlerSchema)

app.get('/api/wwewrestlers', (req, res) => {
  Wrestler
    .find()
    .then(wrestlers => res.status(200).json(wrestlers))
    .catch(err => res.status(404).json(err.message))
})

app.post('/api/wwewrestlers', (req, res) => {
  Wrestler
    .create(req.body)
    .then(wrestler => res.status(200).json(wrestler))
    .catch(err => res.status(422).json(err.message))
})


app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () => console.log(`Express is running on ${process.env.PORT}`))
