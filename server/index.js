const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_URI,{useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected...');
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require('./routes/routes')
app.use('/api/post', router)

app.listen(port, () => console.log(`Server running at ${port}`))