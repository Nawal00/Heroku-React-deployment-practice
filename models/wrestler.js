const mongoose  = require('mongoose')

const wrestlerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  realName: { type: String, required: true},
  image: { type: String, required: true },
  weight: { type: String},
  highlights: { type: String},
  from: { type: String},
  signatureMoves: { type: Array }
})


module.exports = mongoose.model('wrestler', wrestlerSchema)
