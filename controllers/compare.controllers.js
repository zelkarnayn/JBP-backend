const Compare = require("../models/Compare.model")

module.exports.compareController = {
    addCompare: async (req, res) => {
        try {
            const compare = await Compare.create(req.body)
            res.json(compare)
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    deleteCompare: async (req, res) => {
        try {
            const compare = await Compare.findOneAndDelete({
                product: req.params.id
            }, {new: true})
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