const express = require('express')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})