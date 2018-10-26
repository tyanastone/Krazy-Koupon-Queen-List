require('dotenv').config()
// requirements: import mongoose
const mongoose = require("mongoose")


// When it connects, then console.log "Connected to MongoDB"
mongoose.connect('process.env.MONGODB_URI').then(() => {
  console.log("MONGODB is now connected")
})
  // add a catch block 
  .catch(() => {
  console.log('OH NO AN ERROR EVERYONE PANIC')
})

// export your mongoose connection

module.exports = mongoose;