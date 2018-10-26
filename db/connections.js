// requirements: import mongoose
const mongoose = require("mongoose")

// Connect to a local database called "the-donut-shop"
// When it connects, then console.log "Connected to MongoDB"
mongoose.connect("mongodb://localhost/coupon_mongoose").then(() => {
  console.log("MONGODB is now connected")
})
  // add a catch block 
  .catch(() => {
  console.log('OH NO AN ERROR EVERYONE PANIC')
})

// export your mongoose connection

module.exports = mongoose;