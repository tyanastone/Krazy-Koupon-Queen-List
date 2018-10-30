require('dotenv').config()

// requirements: import mongoose
const mongoose = require('mongoose')

// Connect to a local database called "the-donut-shop"
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    // When it connects, then console.log "Connected to MongoDB"
    console.log('Connected to MongoDB')
  })
  .catch((e) => {
    console.log('OH NO AN ERROR EVERYONE PANIC')
    console.log(e)
  })



// export your mongoose connection
module.exports = mongoose