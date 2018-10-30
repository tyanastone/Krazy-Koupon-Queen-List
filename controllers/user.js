
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
       
       User.create(req.body).then((newUser) => {
         console.log(newUser)
         res.redirect(`/user/${newUser._id}`)
     })
    },
    show: (req, res) => {
        User.findById(req.params.id).then(userFromDb => {
            res.render('user/show',{user: userFromDb})
          })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
            res.redirect(`/user/${updatedUser._id}`)
        })
    },
    edit: (req, res) => {
        User.findById(req.params.id).then(user => {
            res.render('user/edit', { user: user})
          })
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/')
    })
      } 
}

module.exports = userController