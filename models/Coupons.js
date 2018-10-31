const mongoose = require('../db/connections')
const Schema = mongoose.Schema


const Coupons = new Schema({
    name: String,
    type: String,
    img: String,
    price: String,
    description: String,
    expiration_date: Date
})


module.exports = mongoose.model("Coupons",Coupons)


