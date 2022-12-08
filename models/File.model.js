const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
  image: Array,
  text: String,
  title: String
})

const File = mongoose.model('File', fileSchema)
module.exports = File