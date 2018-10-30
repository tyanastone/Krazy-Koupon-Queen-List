const User = require('../models/User.js')
// const Product = require('../models/Product.js')
const mongoose = require('./connections')
const Stores = require('../models/Stores.js')
const Coupons = require('../models/Coupons.js')


const razor = new Coupons({
    name: "Bic Razors",
    type: "paper",
    img: "https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/44932841_10217519641126994_5755323173834850304_n.jpg?_nc_cat=101&_nc_ht=scontent.fatl1-2.fna&oh=2747205dc579b0abc890f99b634fe87a&oe=5C7F6D29",
    price: "$3/1",
    description: "$3 off the purchase of 1",
    expiration_date: 9/17/2016
})

const tide = new Coupons({
    name: "Tide",
    type: "paper",
    img: "https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/44932841_10217519641126994_5755323173834850304_n.jpg?_nc_cat=101&_nc_ht=scontent.fatl1-2.fna&oh=2747205dc579b0abc890f99b634fe87a&oe=5C7F6D29",
    price: "$3/1",
    description: "$3 off the purchase of 1",
    expiration_date: 9/17/2016
})

const gain = new Coupons({
    name: "Gain",
    type: "paper",
    img: "https://scontent.fatl1-2.fna.fbcdn.net/v/t1.0-9/44932841_10217519641126994_5755323173834850304_n.jpg?_nc_cat=101&_nc_ht=scontent.fatl1-2.fna&oh=2747205dc579b0abc890f99b634fe87a&oe=5C7F6D29",
    price: "$3/1",
    description: "$3 off the purchase of 1",
    expiration_date: 9/17/2016
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



// This clears your database of extraneous information prior to seeding your database
User.remove({})
    
    // .then(() => Coupons.insertMany([razor, tide, gain]))
    // .then(() => Stores.insertMany([kroger, target, walmart]))
    .then(() => greg.save())
    .then(() => alex.save())
    .then(() => mariah.save())
    .then(() => razor.save())
    .then(() => tide.save())
    .then(() => gain.save())
    .then(() => kroger.save())
    .then(() => target.save())
    .then(() => walmart.save())
    .then(() => console.log("Database seeded successfully"))
.then(() => mongoose.connection.close())