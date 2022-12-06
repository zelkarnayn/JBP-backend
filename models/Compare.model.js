const mongoose = require('mongoose')

const CompareSchema = mongoose.Schema({
    productId: String,
})

const Compare = mongoose.model('Compare', CompareSchema)
module.exports = Compare