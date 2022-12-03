const mongoose = require('mongoose')

const PhoneShema = mongoose.Schema({
    image: [],
    manufacturer: String,
    model: String,
    price: String,
    specification: {
        display: {
            resolution: String,
            diagonal: String,
            density: String,
            frequency: String,
        },
        memory: {
            ram: String,
            rom: String,
        },
        processor: {
            name: String,
            frequencyCPU: String,
            cores: String
        },
        camera: String,
        battery: String,
        wight: String
    }
})

const Phone = mongoose.model('Phone', PhoneShema)
module.exports = Phone