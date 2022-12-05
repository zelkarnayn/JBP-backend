const Phone = require("../models/Phone.model");

module.exports.phonesController = {
    addPhone: async (req, res) => {
        try {
            const phone = await Phone.create(req.body)
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
    }
}









 
