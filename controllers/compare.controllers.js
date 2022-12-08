const Compare = require("../models/Compare.model")

module.exports.compareController = {
    addCompare: async (req, res) => {
        try {
            const compare = await Compare.create({
                productId: req.body.product
            })
            res.json(compare)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    deleteCompare: async (req, res) => {
        try {
            const compare = await Compare.findOneAndDelete({productId: req.body.productId})
            res.json(compare)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    getCompare: async (req, res) => {
        try {
            const compare = await Compare.find()
            res.json(compare)
        } catch (error) {
            res.json({ error: error.message })
        }
    }
}