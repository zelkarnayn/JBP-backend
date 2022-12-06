const mongoose = require('mongoose')

const CompareSchema = mongoose.Schema({
    product: {
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Compare = mongoose.model('Compare', CompareSchema)
module.exports = Compare