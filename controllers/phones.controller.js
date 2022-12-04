const Phone = require("../models/Phone.model")

module.exports.phonesController = {
    addPhone: async (req, res) => {
        const { manufacturer, model, resolution, diagonal, density, frequency, ram, rom, name, frequencyCPU, cores, camera, battery, wight, price } = req.body
        try {
            const phone = await Phone.create({
                image: [],
                manufacturer: manufacturer,
                model: model,
                price: price,
                specification: {
                    display: {
                        resolution: resolution,
                        diagonal: diagonal,
                        density: density,
                        frequency: frequency,
                    },
                    memory: {
                        ram: ram,
                        rom: rom,
                    },
                    processor: {
                        name: name,
                        frequencyCPU: frequencyCPU,
                        cores: cores
                    },
                    camera: camera,
                    battery: battery,
                    wight: wight
                }
                })
            res.json(phone)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    getPhones: async (req, res) => {
        try {
            const phones = await Phone.find()
            res.json(phones)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    deletePhone: async (req, res) => {
        try {
            const phone = await Phone.findByIdAndDelete(req.params.id, {})
            res.json(phone)
        } catch (error) {
            res.json({ error: error.message })
        }

    }
}