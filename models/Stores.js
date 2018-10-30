// const mongoose = require('../db/connections')
// const Schema = mongoose.Schema

// const Stores = new Schema({
//     name: String,
//     address: String
// })

// module.exports = mongoose.model('Stores', Stores)
const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Stores = new Schema({
    name: String,
    address: String 
})

module.exports = mongoose.model('Stores', Stores)