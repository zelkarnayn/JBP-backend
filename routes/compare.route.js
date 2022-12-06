const { Router } = require('express')
const { compareController } = require('../controllers/compare.controllers')
const router = Router()

router.get('/compare/', compareController.getCompare)
router.post('/compare/', compareController.addCompare)
router.delete('/compare/:id', compareController.deleteCompare)

module.exports = router