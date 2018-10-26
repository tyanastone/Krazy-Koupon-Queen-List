
const user = require('../models/User')

const userController = {
    index: (req, res) => {
        res.send("Hey what's up this is user index")
    }
}

module.exports = userController