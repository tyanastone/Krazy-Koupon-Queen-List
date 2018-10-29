const User = require('../models/User.js')
// const Product = require('../models/Product.js')
const mongoose = require('./connections')
const Stores = require('../models/Stores.js')



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
   image: "https://unsplash.com/photos/mEZ3PoFGs_k"
})

const kroger = new Stores ({
    name: "kroger",
   address: "1225 Caroline St NE, Atlanta, GA 30307"
})

const target = new Stores ({
    name: "target",
   address: "1275 Caroline St NE, Atlanta, GA 30307",
})

const walmart = new Stores ({
    name: "walmart",
   address: "835 Martin Luther King Junior Drive Northwest, Atlanta, GA 30314",
})

// This clears your database of extraneous information prior to seeding your database
User.remove({})
    .then(() => Stores.insertMany([kroger, target, walmart]))
    .then(() => greg.save())
    .then(() => alex.save())
    .then(() => mariah.save())
    .then(() => console.log("Database seeded successfully"))
.then(() => mongoose.connection.close())