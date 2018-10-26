const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')

router.get('/', applicationController.index)

router.get('/', userController.index)




module.exports = router