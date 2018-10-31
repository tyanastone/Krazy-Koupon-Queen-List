const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Stores = new Schema({
    name: String,
    address: String,
    image: String
})

module.exports = mongoose.model('Stores', Stores)
