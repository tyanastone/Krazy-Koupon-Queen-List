
const User = require('../models/User')

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
       console.log('create route triggered')
       
       User.create(req.body).then((newUser) => {
         console.log(newUser)
         res.redirect(`/user/${newUser._id}`)
     })
    },
    show: (req, res) => {
        User.findById(req.params.id).then(userFromDb => {
            res.render('user/show',{user: userFromDb})
          })
   }
}

module.exports = userController