const Phone = require("../models/Phone.model")

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

// "/images/14iphone/14iphone_1.jpg",
// "/images/14iphone/14iphone_2.jpg",
// "/images/14iphone/14iphone_3.jpg",
// "/images/14iphone/14iphone_4.jpg",
// "/images/14iphone/14iphone_5.jpg",
// "/images/14iphone/14iphone_6.jpg",
// "/images/14iphone/14iphone_7.jpg",
// "/images/14iphone/14iphone_8.jpg",
// "/images/14iphone/14iphone_9.jpg",
// "/images/14iphone/14iphone_10.jpg",
// "/images/14iphone/14iphone_11.jpg",
// "/images/14iphone/14iphone_12.jpg"








