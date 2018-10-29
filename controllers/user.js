
const user = require('../models/User')

const userController = {
    index: (req, res) => {
        res.send("Hey what's up this is user index")
    },
   new: (req, res) => {
       res.render('user/new')
   } 
}

module.exports = userController