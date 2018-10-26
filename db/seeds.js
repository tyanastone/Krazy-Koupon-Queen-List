const User = require('../models/User.js')
// const Product = require('../models/Product.js')
const mongoose = require('./connections')

const greg = new User ({
    name: "Greg",
    image: "https://unsplash.com/photos/BI91NrppE38"
})

const alex = new User ({
    name: "Alex",
    image: "https://unsplash.com/photos/s41WDwsUZd4"
})

const mariah = new User ({
    name: "Mariah",
   image: "https://unsplash.com/photos/mEZ3PoFGs_k",
})

// This clears your database of extraneous information prior to seeding your database
User.remove({})
    .then(() => User.insertMany([greg, alex, mariah]))
    .then(() => greg.save())
    .then(() => alex.save())
    .then(() => mariah.save())
    .then(() => console.log("Database seeded successfully"))
.then(() => mongoose.connection.close())