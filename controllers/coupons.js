const Stores = require('../models/Stores')
const User = require('../models/User')
const Coupons = require('../models/Coupons')

const couponsController = {
    index: (req, res) => {
        Coupons.find({})
            .then(coupons => {
                res.render('coupons/index', {coupons: coupons})

        }) 
    },
    
    show: (req, res) => {
        // do this so that you do't have to pass req.params inside of find by id
        const couponsId = req.params.couponsId
        Coupons.findById(couponsId)
            .then(coupons => {
                res.render('coupons/show', { coupons: coupons })
            })
    }
}





module.exports = couponsController