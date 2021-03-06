const Stores = require('../models/Stores')
const User = require('../models/User')

const storesController = {
    index: (req, res) => {
        Stores.find({})
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
        const storesId = req.params.storesId
        Stores.findById(storesId)
            .then((store) => {
                // const products = store.products
            res.render('stores/show', {stores: stores})
        })
    },
    delete: (req, res) => {
        Stores.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/stores')
        })
    }
}

module.exports = storesController