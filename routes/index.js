const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')
const storesController = require('../controllers/stores')
const couponsController = require('../controllers/coupons')

router.get('/', applicationController.index)

router.get('/', userController.index)


router.get('/stores', storesController.index)


router.get('/user/new', userController.new)

router.post('/user', userController.create)
router.get('/user/:id', userController.show)
router.get('/user', userController.index)

router.get('/user/:id/edit', userController.edit)
router.patch('/user/:id', userController.update)
router.delete('/:id', userController.delete)
router.delete('/:id', storesController.delete)
router.get('/coupons', couponsController.index)



// router.get('/stores/new', storesController.new)

// router.get('/stores/show', storesController.show)

// router.get('/stores/:storesId', storesController.show)

// router.get('/stores/:storesId/products', productsController.index)

// router.get('/stores/:storesId/products/:productsId', productsController.show)

module.exports = router