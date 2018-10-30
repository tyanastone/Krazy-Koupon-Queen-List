const express = require('express')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes/index')

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)
app.set('view engine', 'hbs')


sdfsdfsdf

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})