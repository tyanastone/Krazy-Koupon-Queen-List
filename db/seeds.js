const User = require('../models/User.js')

const mongoose = require('./connections')
const Stores = require('../models/Stores.js')

const Coupons = require('../models/Coupons.js')



const razor = new Coupons({
    name: "Bic Razors",
    type: "paper",
    img: "https://cdn1.bigcommerce.com/server4100/529a9/products/50510/images/49820/029-Gillette-Disposable-Razor-2ct-save-3-00-mzFe__67623.1540316925.780.780.jpg?c=2",
    price: "$3/1",
    description: "$3 off the purchase of 1",
    expiration_date: 9/17/2016
})

const tide = new Coupons({
    name: "Tide",
    type: "paper",
    img: "https://cdn.shopify.com/s/files/1/1827/4185/products/image_1365eb23-6f5a-4f2a-9c5c-c32a830c485e_480x480.jpg?v=1540668858",
    price: "$3/1",
    description: "$3 off the purchase of 1",
    expiration_date: 9/17/2016
})

const gain = new Coupons({
    name: "Gain",
    type: "paper",
    img: "https://cdn.shopify.com/s/files/1/1827/4185/products/image_df964b7c-65a5-4423-9ba0-d59ba369ade3_480x480.jpg?v=1539446862",
    price: "$2/1",
    description: "$2 off the purchase of 1",
    expiration_date: 9/17/2016
})

const kroger = new Stores ({
    name: "kroger",
    address: "1225 Caroline St NE, Atlanta, GA 30307",
   image: "https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_standard/public/Kroger_store_bannerB_1.png?itok=vp_js9GB"
})

const target = new Stores ({
    name: "target",
    address: "1275 Caroline St NE, Atlanta, GA 30307",
   image: "https://www.gannett-cdn.com/presto/2018/09/12/PTCN/48846ee2-d2bb-4dbd-84ef-7538f871ffe0-targettradition.jpg?crop=3378,1900,x0,y79&width=3200&height=1680&fit=bounds"
})

const walmart = new Stores ({
    name: "walmart",
    address: "835 Martin Luther King Junior Drive Northwest, Atlanta, GA 30314",
   image: "http://www.ktrs.com/wp-content/uploads/2016/05/WALMART.jpg"
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