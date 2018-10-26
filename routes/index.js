const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')
const storesController = require('../controllers/stores')

router.get('/', applicationController.index)

router.get('/', userController.index)


router.get('/', storesController.index)

module.exports = router