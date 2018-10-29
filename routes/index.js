const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')
const storesController = require('../controllers/stores')

router.get('/', applicationController.index)

router.get('/', userController.index)


router.get('/stores', storesController.index)





// router.get('/stores/new', storesController.new)

// router.get('/stores/show', storesController.show)

// router.get('/stores/:storesId', storesController.show)

// router.get('/stores/:storesId/products', productsController.index)

// router.get('/stores/:storesId/products/:productsId', productsController.show)

module.exports = router