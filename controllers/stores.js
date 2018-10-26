const Store = require('../models/Stores')
const User = require('../models/User')

const storesController = {
    index: (req, res) => {
        Store.find({}).populate('products')
            .then((stores) => {
                // res.render sends to handlebars
                res.render('stores/index', {
                stores: stores
            })
        })
    },
    new: (req, res) => {
        res.send("Hey this works")
    },
    show: (req, res) => {
        const storeId = req.params.storesId
        Store.findById(storeId).populate('products')
            .then((store) => {
                // const products = store.products
            res.render('stores/show', {store: store})
        })
    }
}

module.exports = storesController