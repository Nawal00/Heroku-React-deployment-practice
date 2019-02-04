const express = require('express')
const mongoose = require('mongoose')

const app = express()


mongoose.connect('mongodb://localhost/wwewrestlers')

app.get('/wwewrestlers', (req, res) => {
  res.json({ message: 'index route'})
})

app.post('/wwewrestlers', (req, res) => {
  res.json({ message: 'create route'})
})



app.listen(4000, () => console.log('express is running on 4000'))
