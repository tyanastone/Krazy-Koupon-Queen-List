const Stores = require('../models/Stores')
const User = require('../models/User')
const Coupons = require('../models/Coupons')


const couponsController = {
    index: (req, res) => {
        Coupons.find({})
            .then(coupons => {
                res.render('coupons/index', {coupons: coupons})

        }) 
    }
   
}





module.exports = couponsController