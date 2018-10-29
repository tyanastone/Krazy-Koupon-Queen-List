
const user = require('../models/User')

const userController = {
    index: (req, res) => {
        res.send("Hey what's up this is user index")
    },
   new: (req, res) => {
       res.render('user/new')
   },
   create: (req, res) => {
     // Have some info from express.
     // Data that the user provides.
     user.create(req.body).then((newUser) => {
         res.redirect(`/user`)
        //  res.render('/user')
     })
   } 
}

module.exports = userController