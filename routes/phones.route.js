const { Router } = require('express')
const { phonesController } = require('../controllers/phones.controller')
const router = Router()

router.get('/phones/', phonesController.getPhones)
router.post('/phones/', phonesController.addPhone)
router.delete('/delete', phonesController.deletePhone)

module.exports = router